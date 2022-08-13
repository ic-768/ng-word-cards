import { Component, OnInit } from '@angular/core';

import { CardsService } from '../cards-service/cards.service';
import { Card } from '../shared/cards';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  providers: [CardsService],
})
export class CardListComponent implements OnInit {
  ngOnInit(): void {}

  cards: Card[] = [];
  hoveredWord: null | string = null;

  setHoveredWord(word: null | string) {
    this.hoveredWord = word;
  }

  constructor(private cardsService: CardsService) {
    this.cards = this.cardsService.getCards();
  }

  addCard(): void {
    const newCard = { id: `test${this.cards.length}`, meaning: 'test' };
    this.cardsService.addCard(newCard);
  }

  editCard(index: number, card: Card): void {
    this.cardsService.editCard(index, card);
  }

  editMeaning(e: Event, i: number) {
    const target = e.target as HTMLInputElement;
    this.editCard(i, { ...this.cards[i], meaning: target.value });
  }

  editWord(e: Event, i: number) {
    const target = e.target as HTMLInputElement;
    this.editCard(i, { ...this.cards[i], id: target.value });
  }
}
