import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PlantListComponent} from "./plant/plant-list/plant-list.component";

const routes: Routes = [
  {path: 'plants', component: PlantListComponent},
  // {
  //   path: 'menu', component: PlantListComponent,
  //   children: [
  //     {path: '', component: PlantListComponent, pathMatch: 'full'},
  //     {path: ':id', component: PlantListComponent}]
  // },
  {path: 'category/:id', component: PlantListComponent},
  {path: 'category', component: PlantListComponent},
  {path: '', redirectTo: '/plants', pathMatch: 'full'},
  {path: '**',redirectTo: '/plants', pathMatch: 'full'}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {

}
