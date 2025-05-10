import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import Records from '../../../assets/userDatabase.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, FormsModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.scss'
})
export class LoginpageComponent {
  constructor (
    private router: Router
  ) {}

  inputEmailID: string = '';
  inputPassword: string = '';
  validCreds = true;

  authorize() {
    for (let user of Records) {
      if (user.emailID === this.inputEmailID && user.password === this.inputPassword) {
        this.router.navigate(['homepage']);
      }
    }
    this.validCreds = false;
  }
}
