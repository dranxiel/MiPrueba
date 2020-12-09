package com.api.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

import com.googlecode.jmapper.annotations.JGlobalMap;

@Getter
@Setter
@AllArgsConstructor
@ToString
@NoArgsConstructor
@JGlobalMap
public class TareaDto {
    private Long id;
    private String nombre;
    private String descripcion;
    private boolean activo;
}
