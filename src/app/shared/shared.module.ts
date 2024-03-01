import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { ContentSectionComponent } from './content-section/content-section.component';
import { CardComponent } from './card/card.component';
import { FabComponent } from './fab/fab.component';
import { SpecialCardComponent } from './special-card/special-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ContentSectionComponent,
    CardComponent,
    FabComponent,
    SpecialCardComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    HeaderComponent,
    ContentSectionComponent,
    CardComponent,
    FabComponent,
    SpecialCardComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
