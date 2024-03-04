import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, updateDoc } from '@angular/fire/firestore';
import { Observable, debounce, debounceTime, map } from 'rxjs';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root'
})
export class CloudFirestoreService {
  firestore: Firestore = inject(Firestore);

  constructor() { }

  getCards(type: string): Observable<Card[]> {
    const cards = collection(this.firestore, type);
    return (collectionData(cards, { idField: 'id' }) as Observable<Card[]>).pipe(
      map(cards => {
        return cards.map(card => {
          return { ...card, type: type };
        });
      })
    );
  }

  getCardById(type: string, id: string): Observable<Card> {
    const card = doc(this.firestore, `${type}/${id}`);
    return docData(card, { idField: 'id' }) as Observable<Card>;
  }

  addCard(card: Card) {
    const cards = collection(this.firestore, 'personal');
    return addDoc(cards, card);
  }

  deleteCard(card: Card) {
    const selectedCard = doc(this.firestore, `personal/${card.id}`);
    return deleteDoc(selectedCard);
  }

  updateCard(type: string, card: Card) {
    const selectedCard = doc(this.firestore, `${type}/${card.id}`);
    return updateDoc(selectedCard, {
      title: card.title,
      subtitle: card.subtitle,
      imageURL: card.imageURL,
      imageAlt: card.imageAlt,
      items: card.items,
    });
  }
}
