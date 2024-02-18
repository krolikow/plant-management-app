import {Component, OnInit} from '@angular/core';
import {PlantService} from "../plant.service";
import {Plant} from "../plant.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrl: './plant-list.component.css'
})
export class PlantListComponent implements OnInit {
  plants: Plant[] = []
  currentCategoryId: number = 1;
  searchMode: boolean = false;

  constructor(private plantService: PlantService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listPlants();
    })
  }

  listPlants() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if (this.searchMode) {
      this.handleSearchPlants();
    } else {
      this.handleListPlants();
    }
  }

  handleListPlants() {
    const routeParams = this.route.snapshot.paramMap;
    const hasCategoryId: boolean = routeParams.has('id');
    if (hasCategoryId) {
      this.currentCategoryId = +routeParams.get('id')!;
      this.plantService.getPlantListByCategory(this.currentCategoryId).subscribe(
        data => {
          this.plants = data;
        }
      )
    } else {
      this.plantService.getPlantList().subscribe(
        data => {
          this.plants = data;
        }
      )
    }
  }

  private handleSearchPlants() {
    const keyword: string = this.route.snapshot.paramMap.get('keyword')!;
    this.plantService.searchPlants(keyword).subscribe(
      data => {
        this.plants = data;
      }
    )
  }
}
