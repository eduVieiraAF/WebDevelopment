// import { Component } from '@angular/core';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserData } from '../userInterface';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';
import { AddEditComponent } from '../add-edit/add-edit.component';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit, AfterViewInit {

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

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'gender', 'education', 'dob', 'company'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog, private _userService: UsersService) {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
   return {
    id,
    firstName: "",
    lastName: "",
    dob: "",
    company: "",
    gender: "",
    email: "",
    education: ""
  };
}


