import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {
  formFields: {label: string; placeholder: string; fieldType: string}[] = [
    {
      label: 'Title',
      placeholder: 'Give your recipe a name',
      fieldType: 'text'
    },
    {
      label: 'Ingredients',
      placeholder: '',
      fieldType: 'text'
    },
    {
      label: 'Steps',
      placeholder: '',
      fieldType: 'text'
    },
    {
      label: 'Cook Time',
      placeholder: '',
      fieldType: 'number'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
