import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: User[];

  constructor( private http: HttpClient ) { }

  loadUsers() {
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }
}
