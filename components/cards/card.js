import Link from 'next/link';

const Card = ({ items }) => {
	const { title, slug, author, excerpt, tags } = items;

	return (
		<Link className="cardlink" passHref href={`/posts/${slug}`}>
		<svg id="card" viewBox="0 0 1000 200">
				<text id="card-text">
					<tspan id="title" x="0" y="100">{title}</tspan>
					<tspan id="author" x="0" y="150">{author.name}</tspan>
					<tspan id="excerpt" x="0" y="170">{excerpt}</tspan>
				</text>
			</svg>
			</Link>
	);
};

export default Card;
