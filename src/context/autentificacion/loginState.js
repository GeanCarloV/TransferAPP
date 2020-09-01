import React, {useReducer} from 'react';
import loginContext from './loginContext';
import loginReducer from './loginReducer';
import { OBTENER_USUARIO } from '../../types'

const LoginState = props => { 
    const initialState = { 
        user : null
    }
    const [state, dispatch] = useReducer(loginReducer, initialState); 

    const obtenerUsario = (user) => { 
        dispatch({ 
            type: OBTENER_USUARIO, 
            payload: user
        })
    }

    return ( 
        <loginContext.Provider 
            value={{
                user: state.user, 
                obtenerUsario
            }}
        >
            {props.children}
        </loginContext.Provider>
    )
}
export default LoginState;