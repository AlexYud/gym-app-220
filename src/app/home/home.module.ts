import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { ContentComponent } from './home-page/content/content.component';
import { CardPageComponent } from './home-page/card-page/card-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    ContentComponent,
    CardPageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule,
    SharedModule,
  ]
})
export class HomeModule { }
