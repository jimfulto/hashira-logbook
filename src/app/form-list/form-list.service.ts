import { EventEmitter, Injectable } from "@angular/core";
import { Styles } from "../shared/form.model";

@Injectable({ 'providedIn': 'root' })
export class FormListService {
    formsChanged = new EventEmitter<Styles[]>();

    private forms:Styles[] = [
        new Styles('Lateral waterwheel', 1),
        new Styles('Water dance', 2)
      ];

    getForms() {
        return this.forms.slice();
    }

    addForm(form: Styles) {
        this.forms.push(form);
        //copy of array
        this.formsChanged.emit(this.forms.slice());
    }

    addForms(forms: Styles[]) {
        // for (let ingredient of ingredients) {
        //   this.addIngredient(ingredient);
        // }
        this.forms.push(...forms);
        this.formsChanged.emit(this.forms.slice());
      }
}