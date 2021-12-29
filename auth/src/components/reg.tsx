import React, { useState} from 'react';
import {AuthContext} from "../App";
import {useLocation, useNavigate} from "react-router-dom";

const Reg = () => {
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    let navigate = useNavigate();
    let location: any = useLocation();
    let auth = React.useContext(AuthContext);

    let from = location.state?.from?.pathname || '/';

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = {email, pass, login};
        localStorage.setItem(login, JSON.stringify(data))
        if (!localStorage.getItem(login)) {
            auth.signin(login, () => {
                navigate(from, { replace: true });
            });
        }
        setEmail('');
        setPass('');
    }

    return (
        <div className="login-box">
            <form className="email-signup" onSubmit={handleSubmit}>
                <div className="u-form-group">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="u-form-group">
                    <input type="text" placeholder="Login" value={login} onChange={(e) => setLogin(e.target.value)}/>
                </div>
                <div className="u-form-group">
                    <input type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)}/>
                </div>
                <div className="u-form-group">
                    <button type="submit" >Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default Reg;