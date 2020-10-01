import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildInvoiceExamplesComponent } from './build-invoice-examples/build-invoice-examples.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'build-invoice-examples'
  },
  {
    path: 'build-invoice-examples', component: BuildInvoiceExamplesComponent,
    data: { breadcrumb: 'Mẫu hóa đơn' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
// tslint:disable-next-line: class-name
export class VNPTInvoiceRoutingModule { }
