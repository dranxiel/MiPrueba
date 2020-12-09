import { types } from "../../types/types";
import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';
import {getAllAction} from './get-all';

export function borrarTareaAction(id) {
    return async (dispatch) => {
        dispatch(borrarTarea(id) );

        try {
            await clienteAxios.delete(process.env.REACT_APP_TAREA_DELETE + `${id}`);
            dispatch( borrarSuccess() );

            Swal.fire(
                'Deleted',
                'Deleted succesfully',
                'success'
            )
            dispatch( getAllAction() );
        } catch (error) {
            dispatch( borrarError() );
        }
    }
}

const borrarTarea = id => ({
    type: types.GET_TASK_TO_DELETE,
    payload: id
});

const borrarSuccess = () => ({
    type: types.DELETED_TASK_SUCCESS
})

const borrarError = () => ({
    type: types.DELETED_TASK_ERROR,
    payload: true
});