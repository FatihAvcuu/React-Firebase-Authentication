import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../base";
import { AuthContext } from "../Auth";
import { Link } from "react-router-dom"
import './login.css'

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/user");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/user" />;
    }

    return (
        <div className='backgraund'>
            <div className="main">
                <h2 style={{ textAlign: 'center', marginTop: 45 }}>Sign In</h2>
                <form onSubmit={handleLogin}>
                    <center>
                        <div className='formInput'>
                            <i className="fas fa-envelope"></i>
                            <input name="email" type="email" placeholder='Email' />
                        </div>
                        <div className='formInput' style={{ marginTop: 12 }}>
                            <i className="fas fa-lock"></i>
                            <input name="password" type="password" placeholder='Password' />
                        </div>
                        <button type="submit" className='formBtn'>Sign In</button>
                        <p style={{ marginTop: 83, fontSize: 11.5, color: '#2f3542' }}>Not a member?<Link style={{ color: '#2d98da' }} to='/signup'>Sign Up now</Link></p>
                    </center>
                </form>
            </div>
        </div>
    );
};

export default withRouter(Login);