import React, {useReducer} from 'react';
import transferContext from './transferContext';
import transferReducer from './transferReducer';
import { OBTENER_TRANSACIONES } from '../../types'


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

    return ( 
        <transferContext.Provider 
            value={{
                transaciones: state.transaciones, 
                obtenerTracciones
            }}
        >
            {props.children}
        </transferContext.Provider>
    )
}
export default TransferState;