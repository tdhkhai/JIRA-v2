import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/welcome',
    data: {},
  },
  {
    path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule),
    data: { breadcrumb: 'Trang chủ' }
  },
  {
    path: 'units', loadChildren: () => import('./pages/units/units.module').then(m => m.UnitsModule),
    data: { breadcrumb: 'Phòng - Ban' }
  },
  {
    path: 'typeofservices', loadChildren: () => import('./pages/typeOfServices/typeOfServices.module').then(m => m.typeOfServicesModule),
    data: { breadcrumb: 'Loại hình Dịch vụ' }
  },
  {
    path: 'services', loadChildren: () => import('./pages/services/services.module').then(m => m.servicesModule),
    data: { breadcrumb: 'Dịch vụ' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
