import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Plant} from "./plant.model";

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private baseUrl = 'http://localhost:8080/api/plants'

  constructor(private httpClient: HttpClient) {
  }

  getPlantList(): Observable<Plant[]> {
    return this.httpClient
      .get<GetResponse>(this.baseUrl)
      .pipe(map(response => response._embedded.plants))
  }
}

interface GetResponse{
  _embedded:{
    plants: Plant[]
  }
}
