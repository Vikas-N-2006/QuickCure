import React, { useState } from 'react';
import { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import log from '../../../images/doc/info.svg';
import register from '../../../images/doc/register.svg';
import SignIn from './SignIn';
import './SignInForm.css';
import SignUp from './SignUp';
import { toast,Toaster } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthContext'; // Make sure this path is correct

const SignInForm = () => {
    const [isSignUp, setSignUp] = useState(false);
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    // Get the redirect path or default to home page
    const from = location.state?.from?.pathname || "/";

    const handleResponse = (res) => {
        if (res && !res.error) {
            // Update auth context with user data
            dispatch({ type: "LOGIN_SUCCESS", payload: res });
            toast.success("Successfully signed in");
            navigate(from, { replace: true });
        }
    }

    return (
        <div className={`${isSignUp ? "signin-signup-container sign-up-mode" : "signin-signup-container"}`}>
            <Link to="/">
                <span className="pageCloseBtn"><FaTimes /></span>
            </Link>
            <Toaster />
            <div className="forms-container">
                <div className="signIn-singUp">
                    <SignIn handleResponse={handleResponse} />
                    <SignUp handleResponse={handleResponse} />
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here?</h3>
                        <p>Join our healthcare platform to easily schedule appointments and manage your medical records.</p>
                        <button className="iBtn transparent" onClick={() => setSignUp(true)}>Sign Up</button>
                    </div>
                    <img src={log} alt="Login illustration" className="pImg" />
                </div>

                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us?</h3>
                        <p>Welcome back! Sign in to access your appointments, medical history, and connect with your healthcare providers.</p>
                        <button className="iBtn transparent" onClick={() => setSignUp(false)}>Sign In</button>
                    </div>
                    <img src={register} alt="Registration illustration" className="pImg" />
                </div>
            </div>
        </div>
    );
};

export default SignInForm;