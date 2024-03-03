import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { PushNotificationSchema } from '@capacitor/push-notifications';
import { MenuController } from '@ionic/angular';
import { FirebaseCloudMessagingService } from 'src/app/services/firebase-cloud-messaging.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private fcmService = inject(FirebaseCloudMessagingService);
  private menuCtrl = inject(MenuController);
  private router = inject(Router);
  private subscription = this.fcmService.getNotifications().subscribe({
    next: (notifications: PushNotificationSchema[]) => this.notifications = notifications,
  });
  public notifications: PushNotificationSchema[] = this.fcmService.getAllNotifications();
  public hasOpenNotifications = false;

  constructor() { }

  ngOnInit() { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClickNavbar() {
    this.router.navigate(['/home']);
  }

  async onClickNotifications() {
    if (Capacitor.getPlatform() !== 'web') await this.fcmService.init();
    this.menuCtrl.open('end');
  }

  hasUnreadNotifications() {
    if (this.notifications.length > 0 && !this.hasOpenNotifications) return true;
    return false;
  }

  onOpenNotifications() {
    this.hasOpenNotifications = true;
  }

}
