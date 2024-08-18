import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { TableViewComponent } from './table-view/table-view.component';

const routes: Routes = [
  {path:'',component:TableViewComponent},
  {path:'view/:id',component:ViewDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
