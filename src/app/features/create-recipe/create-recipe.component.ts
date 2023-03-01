import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {
  plusIcon = faPlus;
  formFields: {label: string; placeholder: string; fieldType: string}[] = [
    {
      label: 'Title',
      placeholder: 'Name',
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

  ingredients = [
    {
      unit: '',
      measurement: '',
      ingredient: '',
    }
  ];
  instructions = [
    {
      number: 1,
      instruction: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  newIngredient(event?: any) {
    if (event !== undefined && !(event.key === 'Enter' || event.key === 'Tab')) {
      return;
    }
    this.ingredients.push({
      unit: '',
      measurement: '',
      ingredient: ''
    });
  }

  newInstruction(event?: any) {
    if (event !== undefined && event.key !== 'Tab') {
      return;
    }
    this.instructions.push({
      number: this.instructions.length + 1,
      instruction: ''
    })
  }

}
