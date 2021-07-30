import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { starRegisterWithEmailPasswordName } from '../../acction/auth';

import { setError, removeError } from '../../acction/ui';
import { useForm } from '../../hooks/useForm';

export const RegisterScrem = () => {

    const dispatch = useDispatch();
    const {msgEror} = useSelector(state => state.ui );
    
   

    const [ formValues, handleInputChange ] = useForm({
        name: 'Isabel',
        email: 'email@example.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if(isFormValid()){
            dispatch( starRegisterWithEmailPasswordName( email, password, name ) );
        }

    }

    const isFormValid = () => {

        if(name.trim().length === 0){
            dispatch(setError('Name is required'));
            return false;
        }else if(!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'));
            return false;
        }else if(password !== password2 || password.length < 5){
            dispatch(setError('The password and confirm password  are not equal'));
            return false;
        } 

        dispatch(removeError());
        return true;

    }
    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form 
                onSubmit={ handleRegister }
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
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value= {name}
                    onChange = { handleInputChange }
                    />
                
                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value= {email}
                    onChange = { handleInputChange }
                    />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value = {password}
                    onChange = { handleInputChange }
                    />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value = {password2}
                    onChange = { handleInputChange }
                    />

                <button
                    type="submit"
                    className="btn btn-priamry btn-block mb-5"   
                >
                    Register
                </button>


                <Link 
                    to="/auth/login"
                    className="links mt-5"
                >
                    Already register?
                </Link>
            </form>
        </>
    )
}
