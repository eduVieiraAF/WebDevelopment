import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private _formBuilder: FormBuilder) {
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
    if (this.userForm.valid) console.log(this.userForm.value)
  }
}
