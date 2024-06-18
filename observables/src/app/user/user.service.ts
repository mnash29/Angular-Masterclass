import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class UserService { 
    // activatedUser = new EventEmitter<boolean>();

    // Alternatively, and recommended, Subjects can replace EventEmitters for situations when
    // they need to be triggered from code (Active) or requires multicasting
    activatedUser = new Subject<boolean>();
}