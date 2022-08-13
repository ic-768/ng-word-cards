import { Injectable } from '@angular/core';
import { Card, cards } from '../shared/cards';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  cards: Card[] = cards;

  getCards(): Card[] {
    return this.cards;
  }

  addCard(card: Card) {
    this.cards.push(card);
  }

  editCard(index: number, card: Card): void {
    this.cards[index] = card;
  }

  constructor() {}
}
