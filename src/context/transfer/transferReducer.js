import { OBTENER_TRANSACIONES, AGREGAR_TRANSACION } from '../../types'

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
        default: 
            return state 
    }
}