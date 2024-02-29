import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card!: Card;
  @Input() isDisabled: boolean = false;
  @Input() isSpecial: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(card: Card) {
    console.log("Card clicked: ", card);
  }

}
