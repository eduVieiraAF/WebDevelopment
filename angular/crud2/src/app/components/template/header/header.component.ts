import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from 'src/app/views/add-edit/add-edit.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private _dialog: MatDialog) {
  }

  openAddForm() {
    this._dialog.open(AddEditComponent)
  }
}
