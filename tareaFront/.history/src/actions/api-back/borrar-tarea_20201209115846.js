import { types } from "../../types/types";
import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';

export function borrarTareaAction(id) {
    return async (dispatch) => {
        dispatch(borrarTarea(id) );

        try {
            await clienteAxios.delete(process.env.API_DELETE_TAREA + `${id}`);
            dispatch( borrarSuccess() );

            Swal.fire(
                'Deleted',
                'Deleted succesfully',
                'success'
            )
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