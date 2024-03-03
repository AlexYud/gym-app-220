import { Component, Input, OnInit, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Card } from 'src/app/interfaces/card';
import { SpecialCardModalComponent } from './special-card-modal/special-card-modal.component';

@Component({
  selector: 'app-special-card',
  templateUrl: './special-card.component.html',
  styleUrls: ['./special-card.component.scss'],
})
export class SpecialCardComponent  implements OnInit {
  @Input() card!: Card;
  @Input() isDisabled: boolean = false;
  private modalCtrl = inject(ModalController);

  constructor() {}

  ngOnInit() {
  }

  async onClick(card: Card) {
    console.log("Special card clicked: ", card);
    const modal = await this.modalCtrl.create({
      component: SpecialCardModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      console.log('special card comp :', data)
    }
  }
}
