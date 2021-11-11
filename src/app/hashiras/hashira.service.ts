import { EventEmitter, Injectable } from "@angular/core";
import { FormListService } from "../form-list/form-list.service";
import { Styles } from "../shared/form.model";
import { Hashira } from "./hashira.model";

@Injectable({ providedIn: 'root' })
export class HashiraService {
    hashiraSelected = new EventEmitter<Hashira>();

    private hashiras: Hashira[] = [
        new Hashira(
            'Giyu Tomioka', 
            'Water Hashira',
            'https://p4.wallpaperbetter.com/wallpaper/280/996/841/giyu-tomioka-kimetsu-no-yaiba-kimetsu-no-yaiba-water-katana-anime-boys-hd-wallpaper-preview.jpg',
            [
                new Styles('Water bird', 3),
                new Styles('Blessed rain', 5)
            ]
            ),
        new Hashira(
            'Shinobu Kocho', 
            'Insect Hashira',
            'https://tse1.mm.bing.net/th?id=OIP.Gk0xh-XlyPzRpkQlQzJ3NAHaNL&pid=Api&P=0&w=300&h=300',
            [
                new Styles('Poison', 3),
                new Styles('Concussion', 5)
            ]
            )
      ];

      constructor(private flService: FormListService) {}

    getHashiras() {
        //get copy of hashiras
        return this.hashiras.slice();
    }

    getHashira(index: number) {
        return this.hashiras[index];
    }

    addFormsToFormsList(styles: Styles[]) {
        this.flService.addForms(styles);
    }
}