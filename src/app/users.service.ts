import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
    // activeUsers = ['Max', 'Anna'];
    // inactiveUsers = ['Chris', 'Manu'];

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
                iterator.status = !iterator.status;
            }
        }
    }

}
