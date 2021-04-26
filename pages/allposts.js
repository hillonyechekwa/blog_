import { GraphQLClient } from "graphql-request"
import BlogCard from '../components/cards/blogcard'
import MainLayout from '../components/layouts/MainLayout'
import Head from 'next/head'


const AllPosts = ({ posts }) => {
    return (
        // <Layout>
        <MainLayout>
            <Head>
                <title>All Posts</title>
            </Head>
            <div className="post-wrapper" >
            {posts.map(post => (
                <BlogCard key={post.id} items={post} />
            ))}
                </div>
        </MainLayout>
    )
}

export async function getStaticProps() {
    const graphcms = new GraphQLClient(process.env.GRAPHCMS_API)
    const { posts } = await graphcms.request(
        `
        {
            posts {
                content {
                    markdown
                }
                coverImage {
                    url
                }
                    id
                    publishedAt
                    slug
                    tags
                    title
                    excerpt
                    author{
                        name
                    }
            }
        }
        `
    )

    return {
        props: {
            posts
        }
    }
}


export default AllPosts

