import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Styles } from "../shared/form.model";

@Injectable({ 'providedIn': 'root' })
export class FormListService {
    formsChanged = new Subject<Styles[]>();
    startedEditing = new Subject<number>();

    private forms:Styles[] = [
        new Styles('Lateral waterwheel', 1),
        new Styles('Water dance', 2)
      ];

    getForms() {
        return this.forms.slice();
    }

    getForm(index: number) {
        return this.forms[index];
    }

    addForm(form: Styles) {
        this.forms.push(form);
        //copy of array
        this.formsChanged.next(this.forms.slice());
    }

    addForms(forms: Styles[]) {
        // for (let ingredient of ingredients) {
        //   this.addIngredient(ingredient);
        // }
        this.forms.push(...forms);
        this.formsChanged.next(this.forms.slice());
      }

    updateForm(index: number, newForm: Styles) {
        this.forms[index] = newForm;
        this.formsChanged.next(this.forms.slice());
    }
}