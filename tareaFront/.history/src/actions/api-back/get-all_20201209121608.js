// Retorna la informacion de la api
import { types } from "../../types/types";
import clienteAxios from '../../config/axios';

export function getAllAction() {
    return async (dispatch) => {
        dispatch( getTareas() );

        try {          
            const respuesta = await clienteAxios.get(process.env.REACT_APP_TAREA_GET);
            console.log(respuesta.data);
            dispatch( getTareaSuccess(respuesta.data) )
        } catch (error) {
            dispatch( getTareaError() )
        }
    }
}

const getTareas = () => ({
    type: types.GET_TASKS,
    payload: true
});

const getTareaSuccess = tasks => ({
    
    type: types.GET_TASKS_SUCCESS,
    payload: tasks
});

const getTareaError = () => ({
    type: types.GET_TASKS_ERROR, 
    payload: true
});
