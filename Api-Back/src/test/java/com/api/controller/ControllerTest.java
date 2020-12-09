package com.api.controller;


import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.*;

import com.api.model.Tarea;
import com.api.service.Iservice;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.api.dto.TareaDto;
import org.springframework.web.bind.annotation.PathVariable;


public class ControllerTest {

    @Mock
    Iservice service;

    @InjectMocks
    Controller controller;

    private static final int CODE_SUCCES = 200;


    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void get(){
        List<Tarea> tareas = new ArrayList<>();
        Tarea tarea =new Tarea();
        tarea.setActivo(true);
        tarea.setDescripcion("descripcion");
        tarea.setFecha(new Date());
        tarea.setId(1l);
        tarea.setNombre("nombre");
        tareas.add(tarea);
        Mockito.when(service.findAll()).thenReturn(tareas);
        final ResponseEntity<List<TareaDto>> response = controller.get();
        Assert.assertEquals(CODE_SUCCES, response.getStatusCode().value());

    }
    @Test
    public void getPorId() throws Exception {

        Tarea tarea =new Tarea();
        tarea.setActivo(true);
        tarea.setDescripcion("descripcion");
        tarea.setFecha(new Date());
        tarea.setId(1l);
        tarea.setNombre("nombre");
        Mockito.when(service.findById(1l)).thenReturn(tarea);
        final ResponseEntity<TareaDto> response = controller.getEmpleadoPorId(1l);
        Assert.assertEquals(CODE_SUCCES, response.getStatusCode().value());

    }
    @Test
    public void createTask(){
        Tarea tarea =new Tarea();
        tarea.setActivo(true);
        tarea.setDescripcion("descripcion");
        tarea.setFecha(new Date());
        tarea.setId(1l);
        tarea.setNombre("nombre");
        TareaDto tareaDto =new TareaDto();
        tareaDto.setActivo(true);
        tareaDto.setDescripcion("descripcion");
        tareaDto.setId(1l);
        tareaDto.setNombre("nombre");
        Mockito.when(service.save(tarea)).thenReturn(tarea);
        final ResponseEntity<TareaDto> response = controller.createTask(tareaDto);
        Assert.assertEquals(CODE_SUCCES, response.getStatusCode().value());
    }
    @Test
    public void deleteTask() throws Exception {
        Mockito.when(service.delete(1l)).thenReturn(true);
        ResponseEntity <String> response = controller.deleteTask( 1l);
        Assert.assertEquals(CODE_SUCCES, response.getStatusCode().value());
    }
    @Test
    public void update() throws Exception {
        Tarea tarea =new Tarea();
        tarea.setActivo(true);
        tarea.setDescripcion("descripcion");
        tarea.setFecha(new Date());
        tarea.setId(1l);
        tarea.setNombre("nombre");
        TareaDto tareaDto =new TareaDto();
        tareaDto.setActivo(true);
        tareaDto.setDescripcion("descripcion");
        tareaDto.setId(1l);
        tareaDto.setNombre("nombre");
        Mockito.when(service.update(tarea)).thenReturn(tarea);
        ResponseEntity <TareaDto> response = controller.updateTask( 1l, tareaDto);
        Assert.assertEquals(CODE_SUCCES, response.getStatusCode().value());
    }
}
