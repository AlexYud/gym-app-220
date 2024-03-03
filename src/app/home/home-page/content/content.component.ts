import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  private router = inject(Router);
  specialCards = [
    {
      id: 0,
      title: '',
      subtitle: '',
      imageURL: '../../../assets/jpg/bg-workout.jpg',
      imageAlt: 'workout image',
    },
  ]
  personal = [
    {
      id: 1,
      title: 'Levantamento de peso',
      subtitle: '',
      imageURL: '../../../assets/jpg/bg-workout.jpg',
      imageAlt: 'workout image',
    }
  ];

  programs = [
    {
      id: 2,
      title: 'Levantamento de peso',
      subtitle: 'continuar treinando',
      imageURL: '../../../assets/jpg/bg-workout.jpg',
      imageAlt: 'workout image',
    },
    {
      id: 3,
      title: 'Yoga Express',
      subtitle: '',
      imageURL: '../../../assets/jpg/bg-yoga.jpg',
      imageAlt: 'yoga image',
    },
    {
      id: 4,
      title: 'Levantamento de peso',
      subtitle: '',
      imageURL: '../../../assets/jpg/bg-workout.jpg',
      imageAlt: 'workout image',
    }
  ];

  contents = [
    {
      id: 5,
      title: '',
      subtitle: '',
      imageURL: '../../../assets/jpg/bg-content.jpg',
      imageAlt: 'empty content image',
    },
    {
      id: 6,
      title: '',
      subtitle: '',
      imageURL: '../../../assets/jpg/bg-content.jpg',
      imageAlt: 'empty content image',
    }
  ];

  constructor() { }

  ngOnInit() { }

  async onClickAdd() {
    this.router.navigate([`/home/0`]);
  }

}
