import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: {name: string, status: boolean}[];

  constructor(private userService: UserService){}

  ngOnInit() {
    // This is a reference type, by setting it with equal it's getting access
    // to the exact same array as stored in the service.
    this.users = this.userService.usersList;
  }

  onSetTo(name: string) {
    this.userService.setToStatus(name);
  }
}
