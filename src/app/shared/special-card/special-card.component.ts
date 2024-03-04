import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/interfaces/card';

@Component({
  selector: 'app-special-card',
  templateUrl: './special-card.component.html',
  styleUrls: ['./special-card.component.scss'],
})
export class SpecialCardComponent  implements OnInit {
  @Input() card!: Card;
  @Input() isDisabled: boolean = false;
  private router = inject(Router);

  constructor() {}

  ngOnInit() {
  }

  async onClick(card: Card) {
    this.router.navigate([`/home/${card.type}/${card.id}`]);
  }
}
