import React, { useEffect  } from 'react';
import Form from './components/form';
import TareaList from './components/tarea-List';

import { useSelector, useDispatch } from 'react-redux';
import {getAllAction} from './actions/api-back/get-all'


function App() {

  const dispatch = useDispatch();

    useEffect( ()=> {
        const loadTasks = () => dispatch( getAllAction() );
        loadTasks();
        // eslint-disable-next-line
    }, []);

  const taskss = useSelector( state => state.tarea );

  
  const tareasSinRealizar = taskss.filter(tarea => tarea.activo === false);
  const tareasSinRealizadas = taskss.filter(tarea => tarea.activo === true);

  return (
    
      <div className="container">
         <div className="row pt-4">
          <div className="col">
            <TareaList 
              title="To Do" 
              tarea={tareasSinRealizar}
            />
          </div>
          <div className="col">
            <TareaList 
              title="Done"
              tarea={tareasSinRealizadas}
            />
          </div>
        </div>
        <hr></hr>
       
        <Form />

       
      </div>
    
  );
}

export default App;
