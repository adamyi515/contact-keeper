import React, { useReducer } from 'react';
import axios from 'axios';
import { AuthContext} from './authContext';
import { authReducer} from './authReducer';
import {
    REGISTER_USER
} from '../types';

const AuthState = props => {
    const initialState = {
        user: null,
        loading: false,
        isAuthenticated: false,
        error: null,
        token: localStorage.getItem('token')
    }
    const [state, dispatch] = useReducer(authReducer, initialState);

    // ACTIONS ////////////////////////////////////////////

    // Register a user
    const registerUser = async user => {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        };
        try{
            const res = await axios.post('/api/users', user, config);
            console.log(res.data);
            //dispatch({ type: REGISTER_USER, payload: user });
        } catch(err){
            console.log('Error message executed');
            console.error(err.response.data.msg);
        }
        
    }





    return(
        <AuthContext.Provider value={{
            ...state,
            registerUser
        }}>
            { props.children }
        </AuthContext.Provider>
    )
}

export default AuthState;