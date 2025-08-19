/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import { FaFacebook, FaYoutube, FaLinkedinIn } from 'react-icons/fa'
import { RiInstagramFill, RiMailLine } from 'react-icons/ri'

const Footer = () => {
    return (
        <>
            <footer>
                <Link to={""}>
                    <RiInstagramFill />
                </Link>
                <Link to={""}>
                    <FaFacebook />
                </Link>
                <Link to={""}>
                    <FaYoutube />
                </Link>
                <Link to={""}>
                    <FaLinkedinIn />
                </Link>
                <Link to={""}>
                    <RiMailLine />
                </Link>

                <p>&copy;Copyright 2024, Owner Saksham Agrahari, All Right are Reserved.</p>
            </footer>
        </>
    )
}

export default Footer


