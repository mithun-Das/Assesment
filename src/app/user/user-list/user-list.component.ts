import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/User';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  searchString: "";
  completeUserList: User[];
  suggestedUserList: User[];
  selectedUser: User;

  constructor(private userService: UserService) { 
    this.userService.loadUsers().subscribe(response => {
      this.completeUserList = response;
    });
  }

  getSuggestedUserList(searchStr: string) {

    this.selectedUser = null;
    this.suggestedUserList = [];

    if(!searchStr) return;

    this.completeUserList.forEach(data => {
      if(data.name.toLowerCase().includes(searchStr.toLowerCase())
      || data.username.toLowerCase().includes(searchStr.toLowerCase()) 
      || data.email.toLowerCase().includes(searchStr.toLowerCase()))
      { 
        this.suggestedUserList.push(data);
      };
    });
  }

  selectUser(user: User){
    this.selectedUser = user
  }

  ngOnInit(): void {
  }

}
