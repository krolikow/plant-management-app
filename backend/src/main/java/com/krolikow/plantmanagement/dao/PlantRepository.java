package com.krolikow.plantmanagement.dao;

import com.krolikow.plantmanagement.entity.Plant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlantRepository extends JpaRepository<Plant, Long> {
}
