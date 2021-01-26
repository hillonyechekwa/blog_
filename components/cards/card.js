import Link from 'next/link'
import Image from 'next/image'

const Card = ({ items }) => {

    const { title, slug, coverImage, author, excerpt } = items
    return (
        <Link href={`/post/${slug}`}>
            <div>
                <Image
                    src={coverImage.url}
                    alt="thumbnail"
                    width={300}
                    height={150}
                />
                <h2>{title}</h2>
                <p>{author.name}</p>
                <p>{excerpt}</p>
            </div>
        </Link>
    )
}


export default Card


