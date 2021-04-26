import Link from 'next/link'
import {useState, useEffect} from 'react'

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {

        function handleScroll() {
            const lastScrollY = window.scrollY;

            if (lastScrollY > 50) {
                setScrolled(true)
                console.log(scrolled)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
            
    }, [])



    return (
        <nav className={scrolled === true? 'navigation navscrolled': `navigation`}>
            <div className="Logo"></div>
            <ul className="navitems">
                <li className="navitem">
                    {/* TODO: add line interaction on hover */}
                    <Link href="/">Home</Link>
                </li>
                <li className="navitem">
                    <Link href="/allposts">Posts</Link>
                </li>
                <li className="navitem">
                    <Link href="/">About</Link>
                </li>
                <li className="navitem">
                    <Link href="/">buymeacoffee</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation