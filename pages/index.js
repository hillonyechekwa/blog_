import Head from 'next/head';
import MainLayout from '../components/layouts/MainLayout'
import { GraphQLClient } from 'graphql-request';
import Card from '../components/cards/card';
import Button from '../components/button';


const Index = ({ posts }) => {
	return (
		// <Layout>
		<MainLayout>
			<Head>
				<title>AHFOC</title>
			</Head>
				<div className="home-wrapper">
				<svg id="featured" viewBox="0 0 500 200">
					<text id="featuredtext">
						<tspan x="0" y="0" id="subtext1">Featured</tspan>
						<tspan x="0" y="90" id="subtext2">Posts</tspan>
					</text>
					</svg>
					<section className="featured-posts">{posts.map((post) => <Card key={post.id} items={post} />)}</section>				
				</div>
		</MainLayout>
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
