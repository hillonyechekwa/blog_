import Link from 'next/link'


const Header = () => {
    return (
        <header className="siteheader">
                <svg id="site-title" viewBox="0 0 500 200">
                    <text id="text-wrapper">
                        <tspan id="text-top" x="10" y="100">
                            A Head Full
                        </tspan>
                        <tspan id="text-bottom" x="10" y="200">
                            Of Code
                        </tspan>
                    </text>
            </svg>
            {/* <div className="arrow-down"></div> */}
            {/* TODO: Add button styles */}
            <button className="to-posts"><Link href="/allposts"> Go to posts</Link> </button>
        </header>
    )
}



export default Header

