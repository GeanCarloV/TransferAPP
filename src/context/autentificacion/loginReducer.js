import { 
    OBTENER_USUARIO, 
    ELIMINAR_USUARIO
} from '../../types'
export default(state, action) => { 
    switch(action.type){ 
        case OBTENER_USUARIO: 
            return { 
                ...state, 
                user: action.payload
            }
        case ELIMINAR_USUARIO: 
            return { 
                ...state,
                user: action.payload
            }

        default: 
            return state; 
    }
}