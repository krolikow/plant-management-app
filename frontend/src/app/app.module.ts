import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {PlantListComponent} from "./plant/plant-list/plant-list.component";
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {PlantService} from "./plant/plant.service";
import {PlantCardComponent} from "./plant/plant-card/plant-card.component";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    PlantListComponent,
    PlantCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgOptimizedImage,
  ],
  providers: [PlantService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
