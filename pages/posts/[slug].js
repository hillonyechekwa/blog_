import { GraphQLClient } from "graphql-request"
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout'
import Remark from 'remark'
import ReactMarkdown from 'react-markdown'


const PostSlug = ({ post }) => {

    const { title, tags, content, publishedAt, author, coverImage } = post

    return (
        <Layout>
            <div>
                <Head>
                    <title>{title}</title>
                </Head>
                <h1>{title}</h1>
                <Image
                    src={coverImage.url}
                    alt="blogpost cover"
                    width={1280}
                    height={700} />
                <div className="post-details">
                    <p>by: {author.name}</p>
                    <p>published at: {publishedAt}</p>
                    <ul>
                        {tags.map(tag => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>
                </div>

                <article>
                    <ReactMarkdown children={content.markdown} />
                </article>

                <hr />
                {/* TODO: add commenting system */}
            </div >
        </Layout>
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