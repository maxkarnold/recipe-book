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
      backgroundImg: 'breakfast'
    },
    {
      name: 'LUNCH',
      link: '',
      backgroundImg: 'lunch'
    },
    {
      name: 'DINNER',
      link: '',
      backgroundImg: 'dinner'
    },
    {
      name: 'SNACKS',
      link: '',
      backgroundImg: 'snack'
    },
    {
      name: 'DESSERT',
      link: '',
      backgroundImg: 'dessert'
    },
    {
      name: 'ALL',
      link: '',
      backgroundImg: 'all'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
