import { Component, OnInit } from '@angular/core';
import { Form } from '../shared/form.model';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
  forms:Form[] = [
    new Form('Lateral waterwheel', 1),
    new Form('Water dance', 2)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
