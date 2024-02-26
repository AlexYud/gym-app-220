import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  personal = [
    {
      id: 0,
      title: '',
      subtitle: '',
      imageURL: '../../../assets/jpg/bg-workout.jpg',
      imageAlt: 'workout image',
      isDisabled: false,
    },
    {
      id: 1,
      title: 'Yoga Express',
      subtitle: '',
      imageURL: '../../../assets/jpg/bg-yoga.jpg',
      imageAlt: 'yoga image',
      isDisabled: false,
    },
    {
      id: 3,
      title: 'Levantamento de peso',
      subtitle: '',
      imageURL: '../../../assets/jpg/bg-workout.jpg',
      imageAlt: 'workout image',
      isDisabled: false,
    }
  ];

  programs = [
    {
      id: 0,
      title: 'Levantamento de peso',
      subtitle: 'continuar treinando',
      imageURL: '../../../assets/jpg/bg-workout.jpg',
      imageAlt: 'workout image',
      isDisabled: false,
    },
    {
      id: 1,
      title: 'Yoga Express',
      subtitle: '',
      imageURL: '../../../assets/jpg/bg-yoga.jpg',
      imageAlt: 'yoga image',
      isDisabled: false,
    },
    {
      id: 3,
      title: 'Levantamento de peso',
      subtitle: '',
      imageURL: '../../../assets/jpg/bg-workout.jpg',
      imageAlt: 'workout image',
      isDisabled: false,
    }
  ];

  contents = [
    {
      id: 0,
      title: '',
      subtitle: '',
      imageURL: '../../../assets/jpg/bg-content.jpg',
      imageAlt: 'empty content image',
      isDisabled: true,
    },
    {
      id: 1,
      title: '',
      subtitle: '',
      imageURL: '../../../assets/jpg/bg-content.jpg',
      imageAlt: 'empty content image',
      isDisabled: true,
    }
  ];

  constructor() { }

  ngOnInit() { }

}
