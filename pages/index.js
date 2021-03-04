import Head from 'next/head';
import Layout from '../components/layout';
import { GraphQLClient } from 'graphql-request';
import Card from '../components/cards/card';

const Index = ({ posts }) => {
	return (
		<Layout>
			<Head>
				<title>AHFOC</title>
			</Head>
			<div className="home-wrapper">
				<h1>Featured Posts</h1>
				<section className="featured-posts">{posts.map((post) => <Card key={post.id} items={post} />)}</section>
			</div>
		</Layout>
	);
};

export async function getStaticProps() {
	const graphcms = new GraphQLClient(process.env.GRAPHCMS_API);
	const { posts } = await graphcms.request(
		`
        {
            posts(orderBy: id_ASC, last: 3) {
                title
                slug
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
                excerpt
                tags
            }
        }

       `
	);

	return {
		props: {
			posts
		}
	};
}

export default Index;
