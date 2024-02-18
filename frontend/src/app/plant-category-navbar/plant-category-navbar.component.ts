import {Component, OnInit} from '@angular/core';
import {PlantCategory} from "../plant/plant-category.model";
import {PlantService} from "../plant/plant.service";

@Component({
  selector: 'app-plant-category-navbar',
  templateUrl: './plant-category-navbar.component.html',
  styleUrl: './plant-category-navbar.component.css'
})
export class PlantCategoryNavbarComponent implements OnInit{
  plantCategories: PlantCategory[] = [];

  constructor(private plantService: PlantService) {
  }

  ngOnInit(): void {
    this.listPlantCategories();
  }

  private listPlantCategories() {
    this.plantService.getPlantCategories().subscribe(
      data => {
        this.plantCategories = data;
      }
    )
  }
}
