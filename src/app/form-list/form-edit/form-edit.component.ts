import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Styles } from 'src/app/shared/form.model';
import { FormListService } from '../form-list.service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  constructor(private flService: FormListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const formName = this.nameInputRef.nativeElement.value;
    const formAmount = this.amountInputRef.nativeElement.value;
    const newForm = new Styles(formName, formAmount);
    this.flService.addForm(newForm);
  }

}
