import { Component, OnInit, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SpecialCardModalComponent } from 'src/app/shared/special-card/special-card-modal/special-card-modal.component';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  private modalCtrl = inject(ModalController);
  specialCards = [
    {
      id: 0,
      title: '',
      subtitle: '',
      imageURL: '../../../assets/jpg/bg-workout.jpg',
      imageAlt: 'workout image',
    },
  ]
  personal = [
    {
      id: 0,
      title: 'Yoga Express',
      subtitle: '',
      imageURL: '../../../assets/jpg/bg-yoga.jpg',
      imageAlt: 'yoga image',
    },
    {
      id: 1,
      title: 'Levantamento de peso',
      subtitle: '',
      imageURL: '../../../assets/jpg/bg-workout.jpg',
      imageAlt: 'workout image',
    }
  ];

  programs = [
    {
      id: 0,
      title: 'Levantamento de peso',
      subtitle: 'continuar treinando',
      imageURL: '../../../assets/jpg/bg-workout.jpg',
      imageAlt: 'workout image',
    },
    {
      id: 1,
      title: 'Yoga Express',
      subtitle: '',
      imageURL: '../../../assets/jpg/bg-yoga.jpg',
      imageAlt: 'yoga image',
    },
    {
      id: 3,
      title: 'Levantamento de peso',
      subtitle: '',
      imageURL: '../../../assets/jpg/bg-workout.jpg',
      imageAlt: 'workout image',
    }
  ];

  contents = [
    {
      id: 0,
      title: '',
      subtitle: '',
      imageURL: '../../../assets/jpg/bg-content.jpg',
      imageAlt: 'empty content image',
    },
    {
      id: 1,
      title: '',
      subtitle: '',
      imageURL: '../../../assets/jpg/bg-content.jpg',
      imageAlt: 'empty content image',
    }
  ];

  constructor() { }

  ngOnInit() { }

  async onClickAdd() {
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
