import { types } from "../../types/types";
import clienteAxios from '../../config/axios';
import {getAllAction} from './get-all';

export function editarTareaAction(task) {
    return async (dispatch) => {
        dispatch( editarTarea() );

        try {
            await clienteAxios.put(`/api/v1/task/${task.id}`, task);    
            dispatch( editarTareaSuccess(task) );

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