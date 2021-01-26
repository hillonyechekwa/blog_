import { GraphQLClient } from "graphql-request"
import Image from 'next/image'
import Layout from '../components/layout'

const About = ({ authors }) => {

    return (
        <Layout>
            <div>
                {
                    authors.map(author => {
                        return (
                            <div key={author}>
                                <h1>{author.name}</h1>
                                <Image
                                    src={author.avatar.url}
                                    alt="author avatar"
                                    width={270}
                                    height={400}
                                />
                                <p>{author.bibliography}</p>
                                <div>{author.links.map(link => {
                                    return (
                                        <p key={link}>{link}</p>
                                    )
                                })}</div>
                            </div>
                        )
                    })
                }
            </div >
        </Layout>
    )
}

const graphcms = new GraphQLClient(process.env.GRAPHCMS_API)


export async function getStaticProps() {
    const { authors } = await graphcms.request(
        `
            query AboutPageQuery {
                authors{
                    id
                    name
                    bibliography
                    links
                    avatar {
                    url
                    }
                }
            }
        `
    )

    return {
        props: {
            authors
        }
    }
}



export default About