import { types } from "../../types/types";

export function actualizarTareaAction(tarea) {
    return (dispatch) => {
        dispatch( actualizarTarea(tarea) )
    }
}

const actualizarTarea = task => ({
    type: types.GET_TASK_TO_UPDATE,
    payload: task
})

