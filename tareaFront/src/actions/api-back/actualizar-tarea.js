import { types } from "../../types/types";

export function actualizarTareaAction(task) {
    return (dispatch) => {
        dispatch( actualizarTarea(task) )
    }
}

const actualizarTarea = task => ({
    type: types.GET_TASK_TO_UPDATE,
    payload: task
})

