package com.api.controller;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import com.api.service.Iservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.dto.TareaDto;
import com.api.model.Tarea;
import com.googlecode.jmapper.JMapper;

import io.swagger.v3.oas.annotations.Operation;


@RestController
@CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
@RequestMapping("/api")
public class Controller {
    @Autowired
    Iservice servicio;

	private JMapper<TareaDto, Tarea> mapperDto = new JMapper<>(TareaDto.class, Tarea.class);

	@GetMapping("/all")
	@Operation(summary = "Retonar al tareas")
    public ResponseEntity<List <TareaDto>> get() {
        List<Tarea> tarea = servicio.findAll();
       
       List<TareaDto> Response=  tarea.stream().map(entity ->mapperDto.getDestination(entity)).collect(Collectors.toList());
	    return ResponseEntity.ok(Response);

    }

    @GetMapping(value = "/BuscarPor/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<TareaDto> getEmpleadoPorId(@PathVariable(value = "id") Long id) throws Exception
    {
    	
		Tarea tarea = servicio.findById(id);
		if (tarea==null)
		{
		    return ResponseEntity.noContent().build();
        }
		  JMapper<TareaDto, Tarea> userMapper = new JMapper<>
	      (TareaDto.class, Tarea.class);
	    
		  TareaDto result = userMapper.getDestination(tarea);
        return ResponseEntity.ok(result) ;
    }
	
	@PostMapping("/agregarTarea")
	@Operation(summary = "Crea una Tarea")
    public ResponseEntity<TareaDto> createTask(@RequestBody TareaDto tarea)
    {
        Tarea tarea1 = new Tarea();
        tarea1.setId(tarea.getId());
        tarea1.setDescripcion(tarea.getDescripcion());
        tarea1.setNombre(tarea.getNombre());
        tarea1.setFecha(new Date());
        tarea1.setActivo(false);
        return  ResponseEntity.ok(mapperDto.getDestination(servicio.save(tarea1)));
    }
	
	@PutMapping("/actualizarTarea/{id}")
	@Operation(summary = "Actualiza una tarea por id")
    public ResponseEntity<TareaDto> updateTask(@PathVariable(value = "id") Long id,
        @RequestBody TareaDto taskDetails) throws Exception {
	    Tarea tarea2= new Tarea();
        tarea2.setNombre(taskDetails.getNombre());
        tarea2.setDescripcion(taskDetails.getDescripcion());
        tarea2.setActivo(taskDetails.isActivo());
        tarea2.setFecha(new Date());
        tarea2.setId(id);
        final Tarea updatedTask = servicio.update(tarea2);
        return ResponseEntity.ok(mapperDto.getDestination(updatedTask));
    }
	
	@DeleteMapping("/borrarTarea/{id}")
	@Operation(summary = "Borrar tare por id")
    public ResponseEntity<String> deleteTask(@PathVariable(value = "id") Long id)
    throws Exception {
       if(servicio.delete(id))
       {
           return ResponseEntity.ok("Ok");
       }
        return  ResponseEntity.noContent().build();
    }

}
