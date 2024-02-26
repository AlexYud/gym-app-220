import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { ContentSectionComponent } from './content-section/content-section.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ContentSectionComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    HeaderComponent,
    ContentSectionComponent,
    CardComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
