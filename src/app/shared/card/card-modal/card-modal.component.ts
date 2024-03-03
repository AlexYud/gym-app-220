import { Component, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss'],
})
export class CardModalComponent {
  private modalCtrl = inject(ModalController);

  constructor() { }

  cancel() {
    return this.modalCtrl.dismiss(false, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(true, 'confirm');
  }
}
