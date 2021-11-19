import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Styles } from 'src/app/shared/form.model';
import { FormListService } from '../form-list.service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') flForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Styles;

  constructor(private flService: FormListService) { }

  ngOnInit(): void {
    this.flService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.flService.getForm(index);
          this.flForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newForm = new Styles(value.name, value.amount);
    if(this.editMode) {
      this.flService.updateForm(this.editedItemIndex, newForm);
    } else {
      this.flService.addForm(newForm);
    }
    this.editMode = false;
    form.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
