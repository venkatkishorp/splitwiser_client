import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import Records from '../../../assets/userDatabase.json';

@Component({
  selector: 'app-credit-records',
  imports: [DecimalPipe],
  templateUrl: './credit-records.component.html',
  styleUrl: './credit-records.component.scss'
})
export class CreditRecordsComponent {
  creditRecord: any = Records;

  getName(userID: Number) {
    for (var i = 0; i < this.creditRecord.length; i++) {
      if (this.creditRecord[i].userID == userID) {
        return this.creditRecord[i].name;
      }
    }
    return "Unknown user";
  }

  getProfilePic(userID: Number) {
    for (var i = 0; i < this.creditRecord.length; i++) {
      if (this.creditRecord[i].userID == userID) {
        return this.creditRecord[i].profilePic;
      }
    }
    return "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg";
  }
}
