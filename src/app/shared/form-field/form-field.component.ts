import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {
  @Input() fieldData: {label: string; placeholder: string; fieldType: string} = {label: '', placeholder: '', fieldType: ''};

  constructor() {
  }

  ngOnInit(): void {
  }

}
