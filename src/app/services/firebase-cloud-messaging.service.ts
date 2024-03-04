import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PushNotificationSchema, PushNotifications } from '@capacitor/push-notifications';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCloudMessagingService {
  private router = inject(Router);
  private notifications$: BehaviorSubject<PushNotificationSchema[]> = new BehaviorSubject<PushNotificationSchema[]>([
    {
      id: '0',
      title: 'Continue seu treino!',
      data: {
        description: 'Vimos que você perdeu um dia, mas sem problemas! Não desanime! 💪',
        type: 'programs',
        id: '0o4Mu1oyvHOGpvqI2IkM',
      },
    },
    {
      id: '1',
      title: 'Sem tempo? Confira Yoga Express!',
      data: {
        description: 'Um novo programa foi adicionado. Não perca mais tempo e vá dar uma olhada!',
        type: 'programs',
        id: 'Pzys2SpUuLi9d3lW9zKz',
      },
    }
  ]);

  constructor() { }

  getNotifications() {
    return this.notifications$.asObservable();
  }

  getAllNotifications() {
    return this.notifications$.value;
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
      this.notifications$.value.push(notification);
      this.notifications$.next(this.notifications$.value);
    });

    await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
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
  }
}
