/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav>
                <img src="/logo.png" alt="Logo" />
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
