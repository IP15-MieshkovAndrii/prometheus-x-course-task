import './header.scss'
import Navbar from "../Navbar/Navbar";
import {Link} from "react-router-dom";
import { getUsername } from '../LocalStorage/LocalStorage';

const Header = ({title, authorName}) => {
    const user = getUsername();

    return (
        <header className='header'>
            <div className='section-outer header_wrapper'>
                <Link to='/books' className='header_logo'>
                    <span>{title}</span> /
                    <span>{authorName}</span>
                </Link>
                {
                    user !== null ? <div><Navbar/></div> : <div></div>
                }
            </div>
            
        </header>
    );
};

export default Header;