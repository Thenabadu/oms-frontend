import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadFilesComponent } from '../app/components/upload-files/upload-files.component'
import { OrderInformationComponent } from './components/order-information/order-information.component';

const routes: Routes = [
  { path: 'orderInfo',component: OrderInformationComponent },
  { path: '',component: UploadFilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
