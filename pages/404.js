import Head from 'next/head'
import Link from 'next/link'
// import Layout from '../components/layout'
import Image from 'next/image'

const NotFound = () => {
    return (
        <div>
            <Head>
                <meta />
                <title>NotFound</title>
            </Head>
            {/* TODO: beautify 404 page */}
            <div className="notfoundwrapper">
            <p>Hey there! Sorry you couldn't find the page your were looking for. click <Link href="/">here</Link> to go back to the home page</p>
                <Image
                    src="/images/404.png"
                    alt="astronaut"
                    width={500}
                    height={300}
                />
            </div>
         </div>
    )
}


export default NotFound


