import {Component, OnInit} from '@angular/core';
import {PlantService} from "../plant.service";
import {Plant} from "../plant.model";

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.css'
})
export class PlantListComponent implements OnInit {
  plants: Plant[] = []

  constructor(private plantService: PlantService) {
  }

  ngOnInit(): void {
    this.listPlants();
  }

  listPlants() {
    this.plantService.getPlantList().subscribe(
      data => {
        this.plants = data;
      }
    )
  }
}
