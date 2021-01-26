import { GraphQLClient } from "graphql-request"
import Head from 'next/head'
import postcss from "postcss"


const PostSlug = ({ post }) => {

    const { title, tags, content, publishedAt, author, coverImage } = post

    return (
        <div>
            <h1>{title}</h1>
        </div>
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