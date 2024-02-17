import {Component, Input, OnInit} from '@angular/core';
import {Plant} from "../plant.model";

@Component({
  selector: 'app-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrl: './plant-card.component.css'
})
export class PlantCardComponent implements OnInit{
  @Input() plant: Plant | undefined;
  category: string = 'tropical'
  ngOnInit(): void {
  }
}
