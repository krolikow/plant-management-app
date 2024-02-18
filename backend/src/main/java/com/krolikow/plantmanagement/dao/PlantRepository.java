package com.krolikow.plantmanagement.dao;

import com.krolikow.plantmanagement.entity.Plant;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface PlantRepository extends JpaRepository<Plant, Long> {
    Page<Plant> findByCategoryId(@Param("id") Long id, Pageable pageable);
    Page<Plant> findByNameContaining(@Param("name") String name, Pageable pageable);
}
