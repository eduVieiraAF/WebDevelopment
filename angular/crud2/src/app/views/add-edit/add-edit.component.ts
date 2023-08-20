import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  userForm: FormGroup;

  educationList: string[] = [
    "High-school",
    "Higher Degree",
    "Master's degree",
    "PhD"
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UsersService,
    private _dialogRef: MatDialogRef<AddEditComponent>,
    private _snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.userForm = this._formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: ''
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.userForm.patchValue(this.data);
    }
  }

  private handleResponse(successMessage: string, errorMessage: string) {
    return {
      next: (val: any) => {
        this._dialogRef.close();
        this._snackbar.open(successMessage, 'x', {
          duration: 1500,
          verticalPosition: 'top',
        });
        setTimeout(() => {
          location.reload();
        }, 1500);
      },
      error: (err: any) => {
        console.error(err);
        this._dialogRef.close();
        this._snackbar.open(errorMessage, 'x', {
          duration: 1500,
          verticalPosition: 'top',
        });
        setTimeout(() => {
          location.reload();
        }, 1500);
      }
    };
  }

  onFormSubmit() {
    if (this.data) {
      this._userService.updateUser(this.data.id, this.userForm.value).subscribe(
        this.handleResponse('User details have been updated', 'An error has occurred')
      );
    } else {
      this._userService.addUser(this.userForm.value).subscribe(
        this.handleResponse('User has been added', 'An error has occurred')
      );
    }
  }
}
