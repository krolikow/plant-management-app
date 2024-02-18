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
  previousCategoryId: number = 1;
  searchMode: boolean = false;
  pageNumber: number = 1;
  pageSize: number = 2;
  totalElements: number = 0;
  previousKeyword: string = "";

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
      if (this.previousCategoryId != this.currentCategoryId) {
        this.pageNumber = 1
      }
      this.previousCategoryId = this.currentCategoryId;
      this.plantService.getPlantListByCategoryPaginate(
        this.pageNumber - 1,
        this.pageSize, this.currentCategoryId)
        .subscribe(this.prepareResult())
    } else {
      if (this.previousCategoryId != this.currentCategoryId) {
        this.pageNumber = 1
      }
      this.previousCategoryId = this.currentCategoryId;
      this.plantService.getPlantListPaginate(this.pageNumber - 1,
        this.pageSize).subscribe(this.prepareResult())
    }
  }

  private handleSearchPlants() {
    const keyword: string = this.route.snapshot.paramMap.get('keyword')!;
    if (this.previousKeyword != keyword) {
      this.pageNumber = 1;
    }
    this.previousKeyword = keyword;
    this.plantService.searchPlantsPaginate(this.pageNumber - 1,
      this.pageSize,
      keyword).subscribe(this.prepareResult());
  }

  updatePageSize(value: string) {
    this.pageSize = +value;
    this.pageNumber = 1;
    this.listPlants();
  }

  private prepareResult() {
    return (data: any) =>{
      this.plants = data._embedded.plants;
      this.pageNumber = data.page.number + 1;
      this.pageSize = data.page.size;
      this.totalElements = data.page.totalElements;
    }
  }
}
