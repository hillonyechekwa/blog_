import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCampground, faPen, faUserNinja } from '@fortawesome/free-solid-svg-icons'
import Menu from './Menu'
import Hamburger from './Hamburger'

const Header = () => {
    return (
        <header className="siteheader">
            <p>LOGO</p>
            <Hamburger />
          <Menu>
            <Navitem href="/" icon={faCampground}>home</Navitem>
            <Navitem href="/allposts" icon={faPen}>posts</Navitem>
            <Navitem href="/about" icon={faUserNinja}>about</Navitem>
            <a href="buymeacoffee.com" className="coffee nav-item">buymeacoffee</a>f
          </Menu>
        </header>
    )
}

export function Navitem({ children, icon, href = "#" }) {
    return (
        <Link href={href}>
            <div className="nav-item">
                <FontAwesomeIcon icon={icon} />
                <span>{children}</span>
            </div>
        </Link>
    )
}



export default Header

