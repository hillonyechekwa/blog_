import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import {faCampground} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header>
            <Navitem href="/" icon={faCampground}>home</Navitem>
        </header>
    )
}

export function Navitem({children, icon, href="#"}) {
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

