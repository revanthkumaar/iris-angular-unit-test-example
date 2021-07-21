import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from './data.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, DataService],
})
export class UserComponent implements OnInit {
  user = '';
  isLoggedIn = false;
  data = ''
  constructor(private userService: UserService, private dataService:DataService) { }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.dataService.getDetails().then(data => data = data)
  }

}
