import Link from 'next/link'

const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="Logo"></div>
            <ul className="navitems">
                <li className="navitem"><Link href="/">Home</Link></li>
                <li className="navitem"><Link href="/">Posts</Link></li>
                <li className="navitem"><Link href="/">About</Link></li>
                <li className="navitem"><Link href="/">buymeacoffee</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation