import { Component, Input, OnInit, inject } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  @Input() notifications: any[] = [];
  private menuCtrl = inject(MenuController);

  constructor() { }

  ngOnInit() { }

  onClose() {
    this.menuCtrl.close();
  }

  onClick(notification: any) {
    console.log("Notification clicked: ", notification);
    
  }

}
