import { OBTENER_TRANSACIONES, AGREGAR_TRANSACION, ACTUALIZAR_BALANCE } from '../../types';

export default(state, action) => { 
    switch(action.type){
        case OBTENER_TRANSACIONES: 
            return { 
                ...state, 
                transaciones: action.payload
            }
        case AGREGAR_TRANSACION: 
            return {
                ...state,
                transaciones : [ ...state.transaciones, action.payload]
            }
        case ACTUALIZAR_BALANCE: 
            return { 
                ...state, 
                balance: action.payload
            }
        default: 
            return state 
    }
}