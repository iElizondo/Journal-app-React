import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import { firebase } from '../firebase/firebase-config';
import { AuthRouter } from '../routers/AuthRouter';
import { PrivateRoute } from '../routers/PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { JournalScrem } from '../components/journal/JournalScrem';
import { useDispatch } from 'react-redux';
import { login } from '../acction/auth';
import { startLoadingNotes } from '../acction/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [ checking , setCheking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( async(user) => {
            
            if( user?.uid){
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);

                dispatch( startLoadingNotes(user.uid));
            }else{
                setIsLoggedIn(false);
            }

            setCheking(false);
        } )

    }, [ dispatch, setCheking, setIsLoggedIn ])

    if( checking ){
        return (
            <h1>Pleace Wait...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute 
                        isAuthenticated = { isLoggedIn }
                        path="/auth" 
                        component={ AuthRouter } 
                    />
                    
                    <PrivateRoute
                        exact 
                        isAuthenticated={ isLoggedIn }
                        path="/" 
                        component={ JournalScrem } 
                    />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    )
}
