import React, { useCallback, useContext, useState,} from "react";
import { withRouter, Redirect } from "react-router";
import app from "../base";
import { AuthContext } from "../Auth";
import { Link } from "react-router-dom"
import './login.css'

const SignUp = ({ history }) => {
    const [userName, setuserName] = useState('NoEntered');
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password, username } = event.target.elements;
        if (username.value.length >= 6) {
            try {
                await app
                    .auth()
                    .createUserWithEmailAndPassword(email.value, password.value);
                history.push("/")
            } catch (error) {
                alert(error);
            }
        }
        else {
            alert('Please enter username at least 6 characters');
        }
    }, [history]);

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        console.log(userName);
        console.log(currentUser);
        currentUser.updateProfile({
            displayName: userName
        })
        return <Redirect to="/user" />;
    }

    return (
        <div className='backgraund'>
            <div className="main">
                <h2 style={{ textAlign: 'center', marginTop: 45 }}>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <center>
                        <div className='formInput'>
                            <i className="fas fa-user"></i>
                            <input name='username' type="text" placeholder='Username' onChange={(e) => {
                                let name = e.target.value;
                                setuserName(userName => name);}}/>
                        </div>
                        <div className='formInput' style={{ marginTop: 12 }}>
                            <i className="fas fa-envelope"></i>
                            <input name='email' type="email" placeholder='Email' />
                        </div>
                        <div className='formInput' style={{ marginTop: 12 }}>
                            <i className="fas fa-lock"></i>
                            <input name='password' type="password" placeholder='Password' />
                        </div>
                        <button type='submit' className='formBtn'>Sign Up</button>
                        <p style={{ marginTop: 30, fontSize: 11.5, color: '#2f3542' }}>Already member?<Link style={{ color: '#2d98da' }} to="/signin">Sign In now</Link></p>
                    </center>
                </form>
            </div>
        </div>
    );
};

export default withRouter(SignUp);