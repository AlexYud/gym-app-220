import { Component, Input, OnInit, inject } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card!: Card;
  @Input() isDisabled: boolean = false;
  private router = inject(Router);

  constructor() { }

  ngOnInit() {
  }

  async onClick(card: Card) {
    this.router.navigateByUrl(`/home/${card.type}/${card.id}`);
  }
}
