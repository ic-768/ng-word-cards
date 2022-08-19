import { Component, OnInit, Input } from '@angular/core';
import { cards, Card } from '../shared/cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cards: Card[] = cards;
  @Input() card: Card = cards[0];
  @Input() currentCard: number = 0;
  @Input() advanceCard = (): void => undefined;

  shouldShowMeaning = false;

  showMeaning() {
    this.shouldShowMeaning = true;
  }
  hideMeaning() {
    this.shouldShowMeaning = false;
  }

  nextCard() {
    console.log(this.shouldShowMeaning);
    if (this.shouldShowMeaning === true) this.hideMeaning();
    console.log(this.shouldShowMeaning);
    this.advanceCard();
  }

  constructor() {}

  ngOnInit(): void {}
}
