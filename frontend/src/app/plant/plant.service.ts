import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Plant} from "./plant.model";
import {PlantCategory} from "./plant-category.model";

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private baseUrl = 'http://localhost:8080/api/plants'
  private categoryUrl = 'http://localhost:8080/api/plant-category'
  constructor(private httpClient: HttpClient) {
  }

  getPlantList(): Observable<Plant[]> {
    return this.httpClient
      .get<GetResponsePlants>(this.baseUrl)
      .pipe(map(response => response._embedded.plants))
  }

  getPlantListByCategory(categoryId: number): Observable<Plant[]> {
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${categoryId}`
    return this.httpClient
      .get<GetResponsePlants>(searchUrl)
      .pipe(map(response => response._embedded.plants))
  }

  getPlantCategories(): Observable<PlantCategory[]> {
    return this.httpClient
      .get<GetResponsePlantCategory>(this.categoryUrl)
      .pipe(map(response => response._embedded.plantCategory))
  }
}

interface GetResponsePlants {
  _embedded: {
    plants: Plant[]
  }
}

interface GetResponsePlantCategory {
  _embedded: {
    plantCategory: PlantCategory[]
  }
}
