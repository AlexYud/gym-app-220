import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PushNotificationSchema } from '@capacitor/push-notifications';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  @Input() notifications: PushNotificationSchema[] = [];
  private menuCtrl = inject(MenuController);
  private router = inject(Router);

  constructor() { }

  ngOnInit() { }

  onClose() {
    this.menuCtrl.close();
  }

  onClick(notification: PushNotificationSchema) {
    this.router.navigate([`/home/${notification.data.detailsId}`]);
    this.onClose();
  }

}
