import { 
    OBTENER_USUARIO
} from '../../types'
export default(state, action) => { 
    switch(action.type){ 
        case OBTENER_USUARIO: 
            return { 
                ...state, 
                user: action.payload
            }

        default: 
            return state; 
    }
}