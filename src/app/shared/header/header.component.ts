import { Component, OnInit, inject } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { MenuController } from '@ionic/angular';
import { FirebaseCloudMessagingService } from 'src/app/services/firebase-cloud-messaging.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private fcmService = inject(FirebaseCloudMessagingService);
  private menuCtrl = inject(MenuController);
  public notifications: any[] = [];
  public hasOpenNotifications = false;

  constructor() { }

  ngOnInit() { }

  async onClickNotifications() {
    if (Capacitor.getPlatform() !== 'web') await this.fcmService.init();
    this.menuCtrl.open('end');
  }

  hasUnreadNotifications() {
    if (this.fcmService.getNotifications().length > 0 && !this.hasOpenNotifications) return true;
    return false;
  }

  onOpenNotifications() {
    this.hasOpenNotifications = true;
    this.notifications = this.fcmService.getNotifications();
  }

}
