import React from 'react';
import Swal from 'sweetalert2';

// Redux
import { useDispatch } from 'react-redux';
import { actualizarTareaAction } from '../actions/api-back/actualizar-tarea';
import {getAllAction} from '../actions/api-back/get-all'
import { editarTareaAction } from '../actions/api-back/editar-tarea';
import { borrarTareaAction } from '../actions/api-back/borrar-tarea';
const TareaItem = ({ tarea }) => {

    const { id, nombre, descripcion, activo } = tarea;

    const dispatch = useDispatch();

    const elminarTarea = (id) => {
        Swal.fire({
            title: 'Confirmar',
            text: "¿Esta seguro de borrar la tarea?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.value) {
                dispatch( borrarTareaAction(id) );
            }
        });
        dispatch( getAllAction() );
    }

    const cambiarStatus = (tarea) =>
    {
        tarea.activo=!tarea.activo;
        dispatch( editarTareaAction(tarea))
    }

    const cambiarColorPorStatusControl = (status) => {
        return {
            class: status ? 'success' : 'danger'
        }
    }
    const cambiarColorPorStatus = (status) => {
        return !status ? 'success' : 'info';
        
    }
    const editarTarea = (tarea) => {
        dispatch( actualizarTareaAction(tarea) );
    }
    const title = (activo) => {
        if (!activo)
        {
            return "Completar";
        }else
        {
            return "Pasar por Hacer";
        };
    }
    return (  
        <div className={"card border-" + cambiarColorPorStatusControl(activo).class + " mb-3"}>
            <div className={"card-header text-white bg-" + cambiarColorPorStatusControl(activo).class}>{nombre}</div>
            <div className="card-body">
                <div className="d-flex flex-row align-items-center">
                    <div className="p-2">
                        <p className="card-text">{descripcion}</p>
                    </div>
                </div>
            </div>
            <div className="card-footer bg-transparent">
           
                <button type="button" className="btn btn-danger btn-sm float-right" onClick={() => elminarTarea(id)  }>Borrar</button>
                <button type="button" className={"btn btn-" + cambiarColorPorStatus(activo) +" btn-sm mr-3 float-right"} onClick={() => cambiarStatus(tarea)  }>{title(activo)}</button>
                <button type="button" className="btn btn-outline-dark btn-sm mr-3 float-right" onClick={() => editarTarea(tarea)}>Editar</button>
            </div>
        </div>
    );
}
 
export default TareaItem;