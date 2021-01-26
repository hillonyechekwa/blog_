import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCampground, faPen, faUserNinja } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header>
            <Navitem href="/" icon={faCampground}>home</Navitem>
            <Navitem href="/blog" icon={faPen}>blog</Navitem>
            <Navitem href="/about" icon={faUserNinja}>about</Navitem>
        </header>
    )
}

export function Navitem({ children, icon, href = "#" }) {
    return (
        <Link href={href}>
            <div>
                <FontAwesomeIcon icon={icon} />
                <span>{children}</span>
            </div>
        </Link>
    )
}



export default Header

