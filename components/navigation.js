import Link from 'next/link'
import {useState, useEffect} from 'react'

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    console.log(scrolled)

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
                    <Link href="/">Home</Link>
                    {/* <svg className="" width="">
                        <path d="" pathLength="1"/>
                    </svg> */}
                </li>
                <li className="navitem">
                    <Link href="/">Posts</Link>
                    {/* <svg className="" width="">
                        <path d="" pathLength="1"/>
                    </svg> */}
                </li>
                <li className="navitem">
                    <Link href="/">About</Link>
                    {/* <svg className="" width="">
                        <path d="" pathLength="1"/>
                    </svg> */}
                </li>
                <li className="navitem">
                    <Link href="/">buymeacoffee</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation