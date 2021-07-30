import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import validator from 'validator';

import { startLoginEmailPassword, starGoogleLogin } from '../../acction/auth';
import { removeError, setError } from '../../acction/ui';
import { useForm } from '../../hooks/useForm';

export const LoginScrem = () => {

    const dispatch = useDispatch();
    const {loading, msgEror} = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        email: 'email@example.com',
        password: '123456'
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        if(isFormValid()){
            dispatch( startLoginEmailPassword(email, password));
        }
    }

    const isFormValid = () => {
        if(!validator.isEmail(email)){
            dispatch(setError('Email is not valid'));
            return false;
        }else if(password.length < 6){
            dispatch(setError('The password is not valid'));
            return false;
        }
        removeError();
        return true;
    }

    const handleGoogleLogin = () => {
        dispatch( starGoogleLogin() );
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form 
                onSubmit={ handleLogin }
                className="animate__animated animate__fadeIn animate__faster"
            >
            
            {
                msgEror && 
                (
                    <div className="auth__alert-error">
                        { msgEror }
                    </div>
                )
            }

            <input 
                type="text"
                placeholder="Email"
                name="email"
                className="auth__input"
                autoComplete="off"
                value = { email }
                onChange={ handleInputChange }
                />

            <input 
                type="password"
                placeholder="Password"
                name="password"
                className="auth__input"
                value = { password }
                onChange = { handleInputChange }
                />

            <button
                type="submit"
                className="btn btn-priamry btn-block"
                disabled = { loading } 
            >
                Login
            </button>

                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div 
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link 
                    to="/auth/register"
                    className="links"
                >
                    Create new account
                </Link>
            </form>
        </>
    )
}
