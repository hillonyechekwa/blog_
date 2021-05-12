import { GraphQLClient } from "graphql-request"
import Head from 'next/head'
import Image from 'next/image'
import BlogLayout from '../../components/layouts/Blog'
import Remark from 'remark'
import ReactMarkdown from 'react-markdown'
var dayjs = require('dayjs')


const PostSlug = ({ post }) => {

    const { title, tags, content, publishedAt, author, coverImage } = post

    return (
        <BlogLayout>
            <div className="article-wrapper">
                <Head>
                    <title>{title}</title>
                </Head>
                <Image
                    loader={gcmsLoader}
                    src={coverImage.url}
                    alt="blogpost cover"
                    className="articleimg"
                    width={1000}
                    height={400}
                    layout="responsive"
                />
                <h1>{title}</h1>
                <div className="post-details">
                    <p className="author">by: {author.name}</p>
                    <p className="pub-time">published at: {dayjs(publishedAt).format('YYYY MM-DD')}</p>
                    <ul>
                        {tags.map(tag => (
                            <li className="tag" key={tag}>{tag}</li>
                        ))}
                    </ul>
                </div>

                <article className="post-content">
                    <ReactMarkdown children={content.markdown} />
                </article>

                <hr />
                {/* TODO: add commenting system */}
            </div >
            </BlogLayout>
    )
}




const graphcms = new GraphQLClient(process.env.GRAPHCMS_API)


export async function getStaticProps({ params }) {
    const { post } = await graphcms.request(
        `
        query PostPageQuery ($slug: String!){
  post(where: {slug: $slug}) {
    publishedAt
    slug
    tags
    title
    content {
      markdown
    }
    author {
      name
      avatar {
        url
      }
    }
    coverImage {
      url
      height
      width
    }
  }
}
        `, {
        slug: params.slug
    }
    )

    return {
        props: {
            post,
        }
    }
}




export async function getStaticPaths() {
    const { posts } = await graphcms.request(
        `
        {
            posts{
                slug
            }
        }
        `
    )

    const paths = posts.map(({ slug }) => ({
        params: {
            slug,
        }
    }))

    return {
        paths,
        fallback: false
    }
}



export default PostSlug