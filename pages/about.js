import { GraphQLClient } from "graphql-request"
import Image from 'next/image'

const About = ({ author }) => {
    return (
        <div>
            <h1>{author.name}</h1>
            <Image
                src={author.avatar.url}
                alt="author avatar"
            />

            <p>{author.bibliography}</p>
            <div>{author.links.map(link => (
                <p key={link}>{link}</p>
            ))}</div>
        </div>
    )
}

const graphcms = new GraphQLClient(process.env.GRAPHCMS_API)


export async function getStaticProps({ params }) {
    const { author } = await graphcms.request(
        `
            query MyQuery($id: ID) {
                author(where: {id: $id}) {
                    name
                    bibliography
                    links
                    avatar {
                    url(transformation: {image: {resize: {fit: scale, height: 100, width: 100}}})
                    }
                }
            }
        `, {
        id: params.id
    }
    )

    return {
        props: {
            author
        }
    }
}

export async function getStaticPaths() {
    const { authors } = await graphcms.request(
        `
        {
            authors{
                id
                name
            }
        }
        `
    )

    return {
        paths: authors.map((author) => {
            return {
                params: {
                    id: author.id
                }
            }
        })
    }
}


export default About