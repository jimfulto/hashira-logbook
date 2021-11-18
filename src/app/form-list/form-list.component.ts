import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Styles } from '../shared/form.model';
import { FormListService } from './form-list.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit, OnDestroy {
  forms:Styles[];
  private foChangeSub: Subscription;

  constructor(private flService: FormListService) { }

  ngOnInit(): void {
    this.forms = this.flService.getForms();
    this.foChangeSub = this.flService.formsChanged
      .subscribe(
        (forms: Styles[]) => {
          this.forms = forms;
        }
      );
  }

  onEditItem(index: number) {
    this.flService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.foChangeSub.unsubscribe();
  }

}
