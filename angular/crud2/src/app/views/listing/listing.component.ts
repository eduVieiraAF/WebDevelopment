import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddEditComponent } from '../add-edit/add-edit.component';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'gender', 'education', 'dob', 'company', 'actions'];
  dataSource: MatTableDataSource<any>;

  constructor(private _dialog: MatDialog, private _userService: UsersService, private _snackbar: MatSnackBar) {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  getUsers() {
    this._userService.fetchUser().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      },

      error: console.error
    });
  }

  deleteUser(id: number) {
    this._userService.deleteUser(id).subscribe({
      next: (res) => {
        // alert('OK')
        this._snackbar.open('User has been removed.', 'x', {
          duration: 1500,
          verticalPosition: 'top',
        })

        this.getUsers()
      },
      error: console.error
    })
  }

  openEditForm(data: any) {
    this._dialog.open(AddEditComponent,  {
      data
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  ngOnInit(): void {
    this.getUsers()
  }


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

function createNewUser(id: number): any {
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
