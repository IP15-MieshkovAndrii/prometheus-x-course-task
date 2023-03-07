import { getUsername, deleteUsername } from "../LocalStorage/LocalStorage";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss";
import Cart from '../SVG/Cart'
import Avatar from '../SVG/Avatar'
import { Button } from "../Button/Button";

const Navbar = () => {
    const username = getUsername();
    const navigate = useNavigate();

    const handleSignout = () => {
        deleteUsername();
        navigate("/signin");
    }
    return (
        <nav className='nav'>
            <Cart/>
            <Button onClick={handleSignout} className='my-button sign-out'>
                Sign-Out
            </Button>
            <Avatar/>
            <span className='username'>{username}</span>
        </nav>
    );
};

export default Navbar;