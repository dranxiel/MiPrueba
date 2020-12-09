import React, { Fragment } from 'react';
import TareaItem from './tarea-item';

const TareaList = ( { title, tarea  } ) => {

    return ( 
        <Fragment>
            <h3 className="py-2">{title}</h3>
            { tarea.length < 1 
              ? (
                <div className="alert alert-secondary" role="alert">
                 sin Tareas 
                </div>
              ) 
              : tarea.map(tarea => (
                <TareaItem 
                    key={tarea.id}
                    tarea={tarea}
                />
              ))
            }
        </Fragment>
    );
}
 
export default TareaList;