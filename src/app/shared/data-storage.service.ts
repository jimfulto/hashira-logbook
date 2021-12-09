import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Hashira } from "../hashiras/hashira.model";
import { HashiraService } from "../hashiras/hashira.service";
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private hashiraService: HashiraService) {}

    storeHashiras() {
        const hashiras = this.hashiraService.getHashiras();
        //rewriting old recipes
        //no need to subscribe in the header component so subscribed here
        return this.http.put('https://ng-hashira-logbook-default-rtdb.firebaseio.com/hashiras.json', hashiras).subscribe(
            response => {
                console.log(response);
            }
        );
    }

    fetchHashiras() {
        //no need to subscribe in the header component so subscribed here
        return this.http.get<Hashira[]>('https://ng-hashira-logbook-default-rtdb.firebaseio.com/hashiras.json')
        //for submitting empty styles array with hashira
        //styles property is at least set to an empty array
            .pipe(map(hashiras => {
                return hashiras.map(hashira => {
                    return {...hashira, styles: hashira.styles ? hashira.styles : []};
                });
            }),
            //tap operator
            tap(hashiras => {
                this.hashiraService.setHashiras(hashiras);
            })
            )
    }
}