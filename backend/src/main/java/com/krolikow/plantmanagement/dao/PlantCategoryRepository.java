package com.krolikow.plantmanagement.dao;

import com.krolikow.plantmanagement.entity.PlantCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "plantCategory",path="plant-category")
public interface PlantCategoryRepository extends JpaRepository<PlantCategory,Long> {
}
