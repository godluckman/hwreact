import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import {useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../App";

const clientId = "828733178129-l558afib63uvfamsaderdnul67ltqp6b.apps.googleusercontent.com";

const Google = () => {
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    let navigate = useNavigate();
    let location: any = useLocation();
    let auth = React.useContext(AuthContext);
    let from = location.state?.from?.pathname || '/main';

    const onLoginSuccess = (res: any) => {

        console.log('Login Success:', res.profileObj);
        const username = res.profileObj.givenName;
        auth.signin(username, () => {
            navigate(from, { replace: true });
        });
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res: any) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        auth.signout(() => navigate('/'))
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <div>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
    );
}

export default Google;