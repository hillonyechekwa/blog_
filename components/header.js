import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCampground, faPen, faUserNinja } from '@fortawesome/free-solid-svg-icons'
// import Menu from './Menu'
// import Hamburger from './Hamburger'

const Header = () => {
    return (
        <header className="siteheader">
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

