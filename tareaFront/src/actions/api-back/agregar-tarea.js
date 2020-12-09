import { types } from "../../types/types";
import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';
import {getAllAction} from './get-all';

export function agregarTareaAction(tarea) {
    return async (dispatch) => {
        dispatch( agregarTarea() );

        try {
            console.log(process.env.REACT_APP_TAREA_ADD);
            await clienteAxios.post(process.env.REACT_APP_TAREA_ADD, tarea);

           dispatch( agregarTareaSuccess(tarea) );

            // Modal information
            Swal.fire(
                'Success', 
                'Task added successfully',
                'success'
            );
            
            dispatch( getAllAction() )
        } catch (error) {
            dispatch( agregarTareakError(true) );

            Swal.fire({
                icon: 'error',
                title: 'There has been an error',
                text: 'Try again'
            })
        }
    }
}

const agregarTarea = () => ({
    type: types.ADD_TASK,
    payload: true
});

const agregarTareaSuccess = task => ({
    type: types.ADD_TASK_SUCCESS,
    payload: task
})

const agregarTareakError = state => ({
    type: types.ADD_TASK_ERROR,
    payload: state
});

