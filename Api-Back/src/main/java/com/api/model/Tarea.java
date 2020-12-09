package com.api.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@Entity
@NoArgsConstructor

public class Tarea {
	
	@Id
	@GeneratedValue
	private Long id;
	
	@ApiModelProperty()
	private String nombre;
	
	@ApiModelProperty()
	private String descripcion;
	
	@ApiModelProperty()
	private Date fecha;
	private boolean activo;

}
