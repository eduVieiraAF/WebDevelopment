import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from './services/users.service';
import { AddEditComponent } from './views/add-edit/add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CRUD Application';

  constructor(private _dialog: MatDialog, private _userService: UsersService) { }

  openAddEditUseForm() {
    this._dialog.open(AddEditComponent)
  }

  getUsers() {
    this._userService.fetchUser().subscribe({
      next: (res) => console.log(res),
      error: console.error
    });
  }

  ngOnInit(): void {
    this.getUsers()
  }
}

