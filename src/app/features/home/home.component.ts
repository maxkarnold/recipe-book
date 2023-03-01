import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  plusIcon = faPlus;

  recipeTypes = [
    {
      name: 'BREAKFAST',
      link: '',
      backgroundImg: 'breakfast.jpg'
    },
    {
      name: 'LUNCH',
      link: '',
      backgroundImg: 'lunch.png'
    },
    {
      name: 'DINNER',
      link: '',
      backgroundImg: 'dinner.png'
    },
    {
      name: 'SNACKS',
      link: '',
      backgroundImg: 'snack.png'
    },
    {
      name: 'DESSERT',
      link: '',
      backgroundImg: 'dessert.png'
    },
    {
      name: 'ALL',
      link: '',
      backgroundImg: 'misc.png'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
