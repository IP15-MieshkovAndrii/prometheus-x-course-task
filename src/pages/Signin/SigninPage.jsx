import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';
import img from '../../images/avatar2.png'
import { setUser } from '../../components/LocalStorage/LocalStorage';
import {Button} from '../../components/Button/Button.jsx'

const SigninPage = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleSignIn = (event) => {
        event.preventDefault();
        if (username.length < 4 || username.length > 16) {
            return;
        }
        setUser(username)
        navigate('/books');
    }
    return (
        <div className="section-inner auth">
        <div className="auth_avatar">
            <img src={img} alt="Avatar" />
        </div>
        <form onSubmit={handleSignIn} className="auth_form">
            <label>Username</label>
            <input onChange={handleUsernameChange} className="input" type="text" id="username" placeholder="type Username" />
            <Button className="auth__button" 
                    disabled={username.length < 4 || username.length > 16}>Sign-In</Button>
        </form>
        </div>
    );
}

export default SigninPage;