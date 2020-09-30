import { Component, OnInit } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  account: { name: string, status: boolean }[] = [];

  constructor(private userService: UserService){}

  ngOnInit() {
    // This is a reference type, by setting it with equal it's getting access
    // to the exact same array as stored in the service.
    this.account = this.userService.usersList;
  }
}
