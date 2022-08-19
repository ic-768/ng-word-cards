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
  hoveredWord: null | number = null;

  setHoveredWord(index: null | number) {
    this.hoveredWord = index;
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
}
