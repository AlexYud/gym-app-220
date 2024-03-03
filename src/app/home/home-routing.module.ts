import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContentComponent } from './home-page/content/content.component';
import { CardPageComponent } from './home-page/card-page/card-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: '',
        component: ContentComponent,
        data: { animation: 'enterLeavePage' }
      },
      {
        path: ':id',
        component: CardPageComponent,
        data: { animation: 'enterLeavePage' }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
