import { Component, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-special-card-modal',
  templateUrl: './special-card-modal.component.html',
  styleUrls: ['./special-card-modal.component.scss'],
})
export class SpecialCardModalComponent {
  private modalCtrl = inject(ModalController);

  constructor() {}

  cancel() {
    return this.modalCtrl.dismiss(false, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(true, 'confirm');
  }
}
