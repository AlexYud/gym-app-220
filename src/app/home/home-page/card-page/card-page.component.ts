import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/interfaces/card';
import { CloudFirestoreService } from 'src/app/services/cloud-firestore.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss'],
})
export class CardPageComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private cfs = inject(CloudFirestoreService);
  type = this.route.snapshot.paramMap.get('type');
  date = new Date();
  edit = '';
  card: Card = {
    id: '',
    title: 'Título',
    subtitle: '',
    imageURL: '../../../assets/jpg/bg-workout.jpg',
    imageAlt: 'workout image',
    type: 'personal',
    items: [],
  };
  public alertButtons = [
    {
      text: 'Confirmar',
      handler: (alertData: any) => {
        this.card.title = alertData[0];
        this.cfs.updateCard(this.type!, this.card);
      }
    }
  ];
  public alertInputs = [
    {
      placeholder: 'Título',
      value: this.card.title,
    },
  ];

  constructor() { }

  ngOnInit() {
    this.route.params.subscribe(async params => {
      this.type = params['type'];
      this.cfs.getCardById(params['type'], params['id']).subscribe(card => this.card = card);
    });
  }

  onEdit(item: string) {
    this.edit = item;
  }

  onInput(index: number, event: any) {
    this.card.items[index] = event.target.value;
    this.cfs.updateCard(this.type!, this.card);
  }

  onClickAdd() {
    this.card.items.push('Digite o nome do exercício');
    this.edit = 'Digite o nome do exercício';
  }

  onDelete(item: string) {
    this.card.items = this.card.items.filter(_item => _item !== item);
    this.cfs.updateCard(this.type!, this.card);
  }

  onDeleteCard() {
    this.cfs.deleteCard(this.card);
    this.router.navigate(['home/']);
  }

}
