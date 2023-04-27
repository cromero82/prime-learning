import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableHotComponent } from './table-hot/table-hot.component';



@NgModule({
  imports: [RouterModule.forChild([
		{ path: 'table-hot', component: TableHotComponent }
	])],
	exports: [RouterModule]
})
export class CustomRoutingModule { }
