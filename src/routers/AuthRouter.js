import React from 'react';import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { LoginScrem } from '../components/auth/LoginScrem';
import { RegisterScrem } from '../components/auth/RegisterScrem';

export const AuthRouter = () => {
    return (
            <div className="auth__main">
                <div className="auth__box-conteiner">
                    <Switch>
                        <Route 
                            exact
                            path="/auth/login" 
                            component={ LoginScrem } 
                        />

                        <Route
                            exact 
                            path="/auth/register" 
                            component={ RegisterScrem } 
                        />

                        <Redirect to="/auth/login" />
                    </Switch>
                </div>
            </div>
    )
}
