package com.krolikow.plantmanagement.dao;

import com.krolikow.plantmanagement.entity.Plant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface PlantRepository extends JpaRepository<Plant, Long> {
}
