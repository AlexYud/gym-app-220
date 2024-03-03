import { Component, Input, OnInit, inject } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { CardModalComponent } from './card-modal/card-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card!: Card;
  @Input() isDisabled: boolean = false;
  private modalCtrl = inject(ModalController);

  constructor() { }

  ngOnInit() {
  }

  async onClick(card: Card) {
    console.log("Card clicked: ", card);
    const modal = await this.modalCtrl.create({
      component: CardModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      console.log('card comp :', data)
    }
  }
}
