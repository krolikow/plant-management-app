import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {PlantListComponent} from "./plant/plant-list/plant-list.component";
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {PlantService} from "./plant/plant.service";
import {PlantCardComponent} from "./plant/plant-card/plant-card.component";
import {MatTabsModule} from '@angular/material/tabs';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {RoutingModule} from "./routing.module";
import {PlantCategoryNavbarComponent} from "./plant-category-navbar/plant-category-navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    PlantListComponent,
    PlantCardComponent,
    PlantCategoryNavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTabsModule,
    RoutingModule
  ],
  providers: [PlantService, provideAnimationsAsync()],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
