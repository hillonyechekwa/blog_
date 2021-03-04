import Link from 'next/link';
import Image from 'next/image';

const Card = ({ items }) => {
	const { title, slug, coverImage, author, excerpt, tags } = items;

	return (
		<Link className="cardlink" href={`/posts/${slug}`}>
			<div className="card">
				<Image className="card-img" src={coverImage.url} alt="thumbnail" layout="responsive" width={500} height={250} />
				<h2>{title}</h2>
				<small>{author.name}</small>
				<p>{excerpt}</p>
				<ul>{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
			</div>
		</Link>
	);
};

export default Card;
