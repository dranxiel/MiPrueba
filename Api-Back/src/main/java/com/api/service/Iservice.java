package com.api.service;

import com.api.model.Tarea;

import java.util.List;

public interface Iservice {
    boolean delete(long id);
    Tarea save(Tarea tarea);
    Tarea update(Tarea tarea);
    Tarea findById(long id);
    List<Tarea> findAll();
}
