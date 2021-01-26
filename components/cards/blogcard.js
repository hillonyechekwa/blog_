import Link from 'next/link'
import Image from 'next/image'

const BlogCard = ({ items }) => {

    const { title, slug, coverImage, author, excerpt } = items
    return (
        <Link href={`/blog/${slug}`}>
            <div>
                <Image
                    src={coverImage.url}
                    alt="thumbnail"
                    width={200}
                    height={100}
                />
                <h2>{title}</h2>
                <p>{author.name}</p>
                <p>{excerpt}</p>
            </div>
        </Link>
    )
}


export default BlogCard