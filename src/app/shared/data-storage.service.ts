import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Hashira } from "../hashiras/hashira.model";
import { HashiraService } from "../hashiras/hashira.service";
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private hashiraService: HashiraService, private authService: AuthService) {}

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
        //chaining 2 observables user and http
        return this.authService.user.pipe(take(1), exhaustMap(user => {
            return this.http.get<Hashira[]>(
                'https://ng-hashira-logbook-default-rtdb.firebaseio.com/hashiras.json',
                {
                    params: new HttpParams().set('auth', user.token)
                }
                );
        }),
        map(hashiras => {
            return hashiras.map(hashira => {
                return {...hashira, styles: hashira.styles ? hashira.styles : []};
            });
        }),
        //tap operator
        tap(hashiras => {
            this.hashiraService.setHashiras(hashiras);
        })
        );
        //no need to subscribe in the header component so subscribed here
        //for submitting empty styles array with hashira
        //styles property is at least set to an empty array
    }
}