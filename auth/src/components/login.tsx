import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../App";

const Login = () => {
    let navigate = useNavigate();
    let location: any = useLocation();
    let auth = React.useContext(AuthContext);

    let from = location.state?.from?.pathname || '/';

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        let username = formData.get('username') as string;
        if (localStorage.getItem(username)) {
            auth.signin(username, () => {
                navigate(from, { replace: true });
            });
        }
    }

    return (
        <div className="login-box">
            <form className="email-login" onSubmit={handleSubmit}>
                <div className="u-form-group">
                    <input type="text" name='username' placeholder="Login"/>
                </div>
                <div className="u-form-group">
                    <input type="password" placeholder="Password"/>
                </div>
                <div className="u-form-group">
                    <button type="submit">Log in</button>
                </div>
            </form>
            <div className="social-login">
                <a href="#">
                    log in with Google
                </a>
            </div>
        </div>
    );
};

export default Login;