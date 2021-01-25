import Layout from '../components/layout'
import { GraphQlClient } from 'graphql-request'

const Index = () => {
    return (
        <Layout>
            <div>
                This is the body
        </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const graphcms = new GraphQlClient('process.env.GRAPHCMS_API')
    const { posts } = await graphcms.request(
        `
        {
            posts {
                    title
                    slug
                    tags
                    createdAt
                    coverImage {
                        url
                    }
                    author {
                        name
                    }
                    id
                    content {
                        markdown
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


export default Index

