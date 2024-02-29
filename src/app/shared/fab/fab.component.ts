import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
})
export class FabComponent implements OnInit {

  @Input() iconName: string = '';
  @HostBinding("style.--icon-width") @Input() iconWidth: string = '';
  @HostBinding("style.--width") @Input() width: string = '';
  @HostBinding("style.--height") @Input() height: string = '';
  @HostBinding("style.--color") @Input() color: string = '';

  constructor() { }

  ngOnInit() { }

}
