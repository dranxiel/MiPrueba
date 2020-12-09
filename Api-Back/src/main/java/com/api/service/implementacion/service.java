package com.api.service.implementacion;

import com.api.model.Tarea;
import com.api.service.Iservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
@Service
public class service implements Iservice {
    @Autowired
    private com.api.repository.ITareaRepository ITareaRepository;

    public  List<Tarea> findAll()
    {
        return  ITareaRepository.findAll();
    }
    public  Tarea findById(long id)
    {
        return  ITareaRepository.findById(id).orElseGet(null);
    }
    public  Tarea save(Tarea tarea)
    {
        return  ITareaRepository.save(tarea);
    }
    public  Tarea update(Tarea tarea)
    {
        Tarea tarea2 = ITareaRepository.findById(tarea.getId()).orElseGet(null);
        if (tarea==null)
        {
            return null;
        }
        tarea2.setNombre(tarea.getNombre());
        tarea2.setDescripcion(tarea.getDescripcion());
        tarea2.setActivo(tarea.isActivo());
        tarea2.setFecha(new Date());
        return  ITareaRepository.save(tarea);
    }
    public boolean   delete(long id)
    {

        Tarea tarea = ITareaRepository.findById(id).orElseGet(null);
        if (tarea==null)
        {
            return false;
        }
        ITareaRepository.delete(tarea);
        return  true;
    }
}
