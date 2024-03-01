import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card';

@Component({
  selector: 'app-special-card',
  templateUrl: './special-card.component.html',
  styleUrls: ['./special-card.component.scss'],
})
export class SpecialCardComponent  implements OnInit {
  @Input() card!: Card;
  @Input() isDisabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(card: Card) {
    console.log("Card clicked: ", card);
  }

}
