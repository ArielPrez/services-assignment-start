import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService{
    toInactiveCounter = 0;
    toActiveCounter = 0;

    incrementToInactive(){
        this.toInactiveCounter++;
        console.log('User send to Inactive: ' + this.toInactiveCounter);
    }

    incrementToActive(){
        this.toActiveCounter++;
        console.log('Users send to Active: ' + this.toActiveCounter);
    }
}
