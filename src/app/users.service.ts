import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({ providedIn: 'root' })
export class UserService {
    // activeUsers = ['Max', 'Anna'];
    // inactiveUsers = ['Chris', 'Manu'];
    constructor(private counterService: CounterService){}

    usersList = [
        {
            name: 'Max',
            status: true
        },
        {
            name: 'Anna',
            status: true
        },
        {
            name: 'Chris',
            status: false
        },
        {
            name: 'Manu',
            status: false
        }
    ];

    setToStatus(name: string) {
        for (const iterator of this.usersList) {
            if (iterator.name === name) {
                if (iterator.status === true) {
                    this.counterService.incrementToInactive();
                }else{
                    this.counterService.incrementToActive();
                }
                iterator.status = !iterator.status;
            }
        }
    }

}
