import { Component, OnInit } from '@angular/core';
import { Styles } from '../shared/form.model';
import { FormListService } from './form-list.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
  forms:Styles[];

  constructor(private flService: FormListService) { }

  ngOnInit(): void {
    this.forms = this.flService.getForms();
    this.flService.formsChanged
      .subscribe(
        (forms: Styles[]) => {
          this.forms = forms;
        }
      );
  }

}
