import React, {useReducer} from 'react';
import loginContext from './loginContext';
import loginReducer from './loginReducer';
import { OBTENER_USUARIO, ELIMINAR_USUARIO } from '../../types'

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
    const eliminarUsario = () => { 
        dispatch({ 
            type: ELIMINAR_USUARIO, 
            payload: null
        })
    }
    return ( 
        <loginContext.Provider 
            value={{
                user: state.user, 
                obtenerUsario, 
                eliminarUsario
            }}
        >
            {props.children}
        </loginContext.Provider>
    )
}
export default LoginState;