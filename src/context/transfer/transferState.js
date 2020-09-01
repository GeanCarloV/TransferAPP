import React, {useReducer} from 'react';
import transferContext from './transferContext';
import transferReducer from './transferReducer';
import { OBTENER_TRANSACIONES, AGREGAR_TRANSACION, ACTUALIZAR_BALANCE } from '../../types';


const TransferState = props => { 
    
    const initialState = { 
        transaciones : [], 
        balance : [],
        resumenBalance: null
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
    const actualizarBalance = (balance) => { 
        dispatch({
            type: ACTUALIZAR_BALANCE,
            payload: balance
        })
    }


    return ( 
        <transferContext.Provider 
            value={{
                transaciones: state.transaciones, 
                balance: state.balance,
                obtenerTracciones,
                agregarTraccion, 
                actualizarBalance
            }}
        >
            {props.children}
        </transferContext.Provider>
    )
}
export default TransferState;