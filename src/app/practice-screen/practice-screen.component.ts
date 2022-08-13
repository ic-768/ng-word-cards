import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards-service/cards.service';
import { Card } from '../shared/cards';

@Component({
  selector: 'app-practice-screen',
  templateUrl: './practice-screen.component.html',
  styleUrls: ['./practice-screen.component.scss'],
  providers: [CardsService],
})
export class PracticeScreenComponent implements OnInit {
  cards: Card[] = [];
  currentCard: number = 0;
  usedCards: number[] = [];
  shouldShowMeaning: boolean = false;

  constructor(private cardsService: CardsService) {
    this.cards = this.cardsService.getCards();
    this.currentCard = Math.floor(Math.random() * this.cards.length);
  }

  showMeaning() {
    this.shouldShowMeaning = true;
  }

  advanceCard() {
    this.cards.splice(this.currentCard, 1);
    if (this.shouldShowMeaning) this.shouldShowMeaning = false;
  }

  ngOnInit(): void {}
}
