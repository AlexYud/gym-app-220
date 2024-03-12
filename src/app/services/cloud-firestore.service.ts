import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, updateDoc } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { Card } from '../interfaces/card';
import { Exercise } from '../interfaces/exercise';

@Injectable({
  providedIn: 'root'
})
export class CloudFirestoreService {
  firestore: Firestore = inject(Firestore);

  constructor() { }

  getCardExercises(type: string, id: string): Observable<Exercise[]> {
    const exercises = collection(this.firestore, `${type}/${id}/exercises`);
    return collectionData(exercises, { idField: 'id' }) as Observable<Exercise[]>;
  }

  updateCardExercise(type: string, id: string, exercise: Exercise) {
    const selectedExercise = doc(this.firestore, `${type}/${id}/exercises/${exercise.id}`);
    return updateDoc(selectedExercise, {
      title: exercise.title,
      description: exercise.description,
      checked: exercise.checked,
    });
  }

  getCards(type: string): Observable<Card[]> {
    const cards = collection(this.firestore, type);
    return (collectionData(cards, { idField: 'id' }) as Observable<Card[]>).pipe(
      map(cards => {
        return cards.map(card => { return { ...card, type } });
      })
    );
  }

  getCardById(type: string, id: string): Observable<Card> {
    const card = doc(this.firestore, `${type}/${id}`);
    return (docData(card, { idField: 'id' }) as Observable<Card>).pipe(
      map(card => { return { ...card, type } })
    );
  }

  addCard(card: Card) {
    const cards = collection(this.firestore, 'personal');
    return addDoc(cards, card);
  }

  deleteCard(id: string) {
    const selectedCard = doc(this.firestore, `personal/${id}`);
    return deleteDoc(selectedCard);
  }

  updateCard(type: string, card: Card) {
    const selectedCard = doc(this.firestore, `${type}/${card.id}`);
    return updateDoc(selectedCard, {
      title: card.title,
      subtitle: card.subtitle,
      imageURL: card.imageURL,
      imageAlt: card.imageAlt,
    });
  }
}
