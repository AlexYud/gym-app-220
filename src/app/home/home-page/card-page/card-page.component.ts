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
  private subscription = this.route.params.subscribe(async params => {
    this.cfs.getCardById(params['type'], params['id']).subscribe(card => this.card = card);
    this.cfs.getCardExercises(params['type'], params['id']).subscribe(cardExercises => {
      this.exercises = cardExercises;
      this.updateProgressBar();
    });
  });
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

  constructor() { }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onCheckChange(event: any, exercise: Exercise) {
    const _exercise = this.exercises.find(_exercise => _exercise.id === exercise.id);
    if (_exercise) this.updateExercise(_exercise, event.target.checked);
    this.updateProgressBar();
    this.updateCardStatus();
  }

  updateExercise(exercise: Exercise, checkValue: boolean) {
    exercise.checked = checkValue;
    this.cfs.updateCardExercise(this.card.type, this.card.id, exercise);
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

  updateCardStatus() {
    const someChecked = this.exercises.some(exercise => exercise.checked);
    if (someChecked && this.card.subtitle === '') {
      this.card.subtitle = 'continuar treinando';
      return this.cfs.updateCard(this.card.type, this.card);
    }
    if (!someChecked && this.card.subtitle === 'continuar treinando') {
      this.card.subtitle = '';
      return this.cfs.updateCard(this.card.type, this.card);
    }
    return;
  }

  onDeleteCard() {
    this.cfs.deleteCard(this.card.id);
    this.router.navigateByUrl('/home');
  }

}
