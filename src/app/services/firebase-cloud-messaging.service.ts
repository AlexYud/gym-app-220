import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PushNotifications } from '@capacitor/push-notifications';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCloudMessagingService {
  private router = inject(Router);
  private notifications = [
    {
      title: 'Confira o novo programa!',
      description: 'Um novo programa foi adicionado. Não perca mais tempo e vá dar uma olhada!'
    }
  ];

  constructor() { }

  getNotifications() {
    return this.notifications;
  }

  async init() {
    await this.registerNotifications();
    await this.addListeners();
  }

  private async addListeners() {
    await PushNotifications.addListener('registration', token => {
      console.info('Registration token: ', token.value);
    });

    await PushNotifications.addListener('registrationError', err => {
      console.error('Registration error: ', err.error);
    });

    await PushNotifications.addListener('pushNotificationReceived', notification => {
      console.log('Push notification received: ', notification);
    });

    await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
      console.log('Push notification action performed', notification.actionId, notification.inputValue);
      const data = notification.notification.data;
      if (data.detailsId) this.router.navigateByUrl(`/home/${data.detailsId}`);
    });
  }

  private async registerNotifications() {
    let permStatus = await PushNotifications.checkPermissions();

    if (permStatus.receive === 'prompt') {
      permStatus = await PushNotifications.requestPermissions();
    }

    if (permStatus.receive !== 'granted') {
      throw new Error('User denied permissions!');
    }

    await PushNotifications.register();
  }

  private async getDeliveredNotifications() {
    const notificationList = await PushNotifications.getDeliveredNotifications();
    console.log('delivered notifications', notificationList);
  }
}
