import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/interfaces/card';
import { CloudFirestoreService } from 'src/app/services/cloud-firestore.service';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit, OnDestroy {
  private cfs = inject(CloudFirestoreService);
  private router = inject(Router);
  private subscriptionPersonal = this.cfs.getCards('personal').subscribe(data => this.personal = data);
  private subscriptionPrograms = this.cfs.getCards('programs').subscribe(data => this.programs = data);

  specialCards = [
    {
      id: '0',
      title: '',
      subtitle: '',
      imageURL: '../../../assets/jpg/bg-workout.jpg',
      imageAlt: 'workout image',
      type: 'personal',
      items: [],
    },
  ];

  personal: Card[] = [];

  programs: Card[] = [];

  contents = [
    {
      id: '-1',
      title: '',
      subtitle: '',
      imageURL: '../../../assets/jpg/bg-content.jpg',
      imageAlt: 'empty content image',
      type: 'content',
      items: [],
    },
    {
      id: '-1',
      title: '',
      subtitle: '',
      imageURL: '../../../assets/jpg/bg-content.jpg',
      imageAlt: 'empty content image',
      type: 'content',
      items: [],
    }
  ];

  constructor() { }

  ngOnInit() { }

  ngOnDestroy(): void {
    this.subscriptionPersonal.unsubscribe();
    this.subscriptionPrograms.unsubscribe();
  }

  async onClickAdd() {
    var card = {
      id: '',
      title: 'Título',
      subtitle: '',
      imageURL: '../../../assets/jpg/bg-workout.jpg',
      imageAlt: 'workout image',
      type: 'personal',
      items: [],
    };
    await this.cfs.addCard(card);
    const newCard = this.personal.find(card => card.items.length === 0);
    this.router.navigate([`/home/${newCard!.type}/${newCard!.id}`]);
  }

}
