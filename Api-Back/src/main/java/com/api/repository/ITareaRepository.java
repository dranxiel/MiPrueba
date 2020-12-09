package com.api.repository;

import com.api.model.Tarea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ITareaRepository extends JpaRepository<Tarea, Long>{

}
