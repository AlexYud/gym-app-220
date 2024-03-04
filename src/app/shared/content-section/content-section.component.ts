import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss'],
})
export class ContentSectionComponent implements OnInit {
  @Input() specialCards: Card[] = [];
  @Input() cards: Card[] = [];
  @Input() isDisabled: boolean = false;

  constructor() { }

  ngOnInit() { }

}
