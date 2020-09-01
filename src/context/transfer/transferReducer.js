import { OBTENER_TRANSACIONES } from '../../types'

export default(state, action) => { 
    switch(action.type){
        case OBTENER_TRANSACIONES: 
            return { 
                ...state, 
                transaciones: action.payload
            }
        default: 
            return state 
    }
}