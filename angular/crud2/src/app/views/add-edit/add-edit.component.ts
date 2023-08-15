import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent {
  userForm: FormGroup

  educationList: string[] = [
    "High-school",
    "Higher Degree",
    "Master's degree",
    "PhD"
  ]

  constructor(private _formBuilder: FormBuilder, private _userService: UsersService, private _dialogRef: DialogRef<AddEditComponent>) {
    this.userForm = this._formBuilder.group(
      {
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        gender: '',
        education: '',
        company: ''

      }
    )
  }

  onFormSubmit() {
    if (this.userForm.valid) this._userService.addUser(this.userForm.value).subscribe({
      next: (val: any) => {
        alert("user added successfully")
        this._dialogRef.close()
        console.log(this.userForm.value)
      },

      error: (err) => {
        console.error(err)
      }
    })
  }
}
