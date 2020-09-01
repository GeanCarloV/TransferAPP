import React, {useReducer} from 'react';
import transferContext from './transferContext';
import transferReducer from './transferReducer';
import { 
    OBTENER_TRANSACIONES,
    AGREGAR_TRANSACION
    } from '../../types'


const TransferState = props => { 
    
    const initialState = { 
        transaciones : []
    }

    const [state, dispatch] = useReducer(transferReducer, initialState); 

    // simulal la manera de hacer la peticion al backend 
    const obtenerTracciones = (transaciones) => {
        dispatch({ 
            type: OBTENER_TRANSACIONES, 
            payload: transaciones 
        })
    }
    const agregarTraccion = (transacion) =>{
        dispatch({
            type: AGREGAR_TRANSACION,
            payload: transacion
        })
    }
    return ( 
        <transferContext.Provider 
            value={{
                transaciones: state.transaciones, 
                obtenerTracciones,
                agregarTraccion
            }}
        >
            {props.children}
        </transferContext.Provider>
    )
}
export default TransferState;