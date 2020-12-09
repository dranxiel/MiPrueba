import { types } from "../../types/types";
import clienteAxios from '../../config/axios';
import {getAllAction} from './get-all';

export function editarTareaAction(tarea) {
    return async (dispatch) => {
        dispatch( editarTarea() );

        try {
            console.log(tarea);
            await clienteAxios.put(process.env.REACT_APP_TAREA_UPDATE + `${tarea.id}`, tarea);    
            dispatch( editarTareaSuccess(tarea) );

            dispatch( getAllAction() );
        } catch (error) {
            dispatch( editarTareaError() );
        }
    }
}

const editarTarea = () => ({
    type: types.EDIT_TASK
});

const editarTareaSuccess = task => ({
    type: types.EDIT_TASK_SUCCESS,
    payload: task
});
const editarTareaError = () => ({
    type: types.EDIT_TASK_ERROR,
    payload: true
})