import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/interfaces/card';
import { Exercise } from 'src/app/interfaces/exercise';
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
  progress = 0;
  card: Card = {
    id: '',
    title: 'Título',
    subtitle: '',
    imageURL: '../../../assets/jpg/bg-workout.jpg',
    imageAlt: 'workout image',
    type: 'personal',
  };
  exercises: Exercise[] = [];
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
      this.cfs.getCardExercises(params['type'], params['id']).subscribe(cardExercises => {
        this.exercises = cardExercises;
        this.updateProgressBar();

      });
    });
  }

  onCheckChange(event: any, exercise: Exercise) {
    this.exercises.map((_exercise: Exercise) => {
      if (_exercise.id === exercise.id) this.updateExercise(_exercise, event.target.checked);
    });
    this.updateProgressBar();
  }

  updateProgressBar() {
    var numberChecked = 0;
    var totalItems = 0;
    this.exercises.map((_exercise: Exercise) => {
      if (_exercise.checked) numberChecked++;
      totalItems++;
    });
    this.progress = numberChecked / totalItems;
  }

  updateExercise(_exercise: Exercise, checkValue: boolean) {
    _exercise.checked = checkValue;
    this.cfs.updateCardExercise(this.type!, this.card.id, _exercise);
  }

  onDeleteCard() {
    this.cfs.deleteCard(this.card);
    this.router.navigate(['home/']);
  }

}
