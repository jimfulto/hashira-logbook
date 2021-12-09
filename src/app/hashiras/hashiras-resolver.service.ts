import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";
import { Hashira } from "./hashira.model";
import { HashiraService } from "./hashira.service";

@Injectable({ providedIn: 'root' })
export class HashirasResolverService implements Resolve<Hashira[]> {
    constructor(private dataStorageService: DataStorageService, private hashiraService: HashiraService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const hashiras = this.hashiraService.getHashiras();

        if(hashiras.length === 0) {
            return this.dataStorageService.fetchHashiras();
        } else {
            return hashiras;
        }
    }
}