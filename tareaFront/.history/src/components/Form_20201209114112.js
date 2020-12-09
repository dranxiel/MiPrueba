import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { agregarTareaAction } from '../actions/api-back/agregar-tarea';
import { editarTareaAction } from '../actions/api-back/editar-tarea';

const Form = () => {
    console.log(process.env.REACT_APP_API);
    //Retrieves information from the store.. Where the app data state relies
    const editTarea = useSelector(state => state.editTask)
    const refrescarTarea = useSelector(state => state.taskToBeUpdated);

    const [ error, setError ] = useState(false);

    const[tarea, setTarea] = useState({
        nombre: '',
        descripcion: ''
    })

    useEffect( () => {
        if(editTarea){
            setTarea(refrescarTarea);
        }else{
            setTarea({
                nombre: '',
                descripcion: ''
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refrescarTarea])

    const{ nombre, descripcion } = tarea;

    // Binded to the actions
    const dispatch = useDispatch();

    const saveTarea = task => dispatch( agregarTareaAction(tarea) );


    /**
     * Update task when input change
     */
    const updateState = (event) => {
        setTarea({
            ...tarea,
            [event.target.name]: event.target.value
        })
    }

    const clean = () => {
        setTarea({
            nombre: '',
            descripcion: ''
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( nombre.trim() === '' || descripcion === '') {
            setError(true);
            return;
        }
        setError(false);

        if ( !editTarea ) {
            saveTarea({
                nombre: nombre,
                descripcion: descripcion
            })
            clean();
        } else {
            dispatch( editarTareaAction({
                id: tarea.id,
                taskName: nombre,
                description: descripcion
            }) )
            clean();
        }
    }

    const cancelEdit = () => {
        clean();
    }

    

    return (
        
        <form onSubmit={handleSubmit}>
             <h1 className="py-4">Form Tarea</h1>
    <h4>{ 

    process.env.REACT_APP_API} s</h4>
            <div className="card">
                <div className="card-header">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <div className="text-primary">{!editTarea ? 'Agregar' : 'Editar' }</div>
                        <div>
                            {!editTarea 
                                ? (
                                    <button className="btn btn-primary btn-sm">Agregar</button>
                                    
                                ) : (
                                    <Fragment>
                                        <button className="btn btn-primary btn-sm mr-3">Editar</button>
                                        <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => cancelEdit()}>Cancel</button>
                                    </Fragment>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="card-body">
            
                    <div className="form-group">
                        <input 
                            className="form-control"
                            type="text"
                            name="nombre"
                            placeholder="Tarea Comprar Comida"
                            onChange={updateState}
                            value={nombre}
                        />
                    </div>
                    <div className="form-group">
                        <textarea 
                            className="form-control" 
                            name="descripcion" 
                            onChange={updateState}
                            value={descripcion}
                        ></textarea>
                    </div>
                    {error ? (
                        <div className="alert alert-danger" role="alert">
                           Todo los Campos son requeridos
                        </div>
                    ) : null}
                    
                </div>
            </div>
        </form>

    );
}
 
export default Form;
