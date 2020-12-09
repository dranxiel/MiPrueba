import { types } from "../types/types";

const initialState = {
    tarea: [],
    error: null,
    loading: false, 
    tareaBorrarEstado: null,
    tareaActualizarEstado: null,
    editarTarea: false,
    messageAction: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function ( state = initialState, action ) {
    switch ( action.type ) {
        case types.ADD_TASK:
        case types.GET_TASKS:
            return {
                ...state,
                loading: action.payload
            }

        case types.GET_TASKS_SUCCESS:
            return {
                ...state,
                loading: false,
                editarTarea: false,
                error: null,
                tarea: action.payload
            }

        case types.ADD_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                tarea: [...state.tarea, action.payload]
            }
        case types.EDIT_TASK_ERROR:
        case types.ADD_TASK_ERROR:
                return {
                    ...state,
                    loading: false,
                    editarTarea: false,
                    error: action.payload
                }

        case types.SHOW_ALERT:
            return {
                ...state,
                messageAction: action.payload
            }
        case types.HIDE_ALERT:
            return {
                ...state,
                messageAction: null
            }
        case types.GET_TASK_TO_DELETE:
            return {
                ...state,
                tareaBorrarEstado: action.payload
            }
        case types.DELETED_TASK_SUCCESS:
            return {
                ...state,
                tarea: state.tarea.filter( tar => tar.id !== state.tareaBorrarEstado ),
                tareaBorrarEstado: null
            }

        case  types.GET_TASK_TO_UPDATE:
            return {
                ...state,
                tareaActualizarEstado: action.payload,
                editarTarea: true
            }
        case types.EDIT_TASK_SUCCESS:
            return {
                ...state,
                tareaActualizarEstado: null,
                editarTarea: false,
            }
    
        default:
            return state;
    }
}
