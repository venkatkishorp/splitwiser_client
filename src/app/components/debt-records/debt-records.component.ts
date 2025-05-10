import { Component } from '@angular/core';
import Records from '../../../assets/userDatabase.json'
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-debt-records',
  imports: [DecimalPipe],
  templateUrl: './debt-records.component.html',
  styleUrl: './debt-records.component.scss'
})
export class DebtRecordsComponent {
  debtRecord: any = Records;

  getName(userID: Number) {
    for (var i = 0; i < this.debtRecord.length; i++) {
      if (this.debtRecord[i].userID == userID) {
        return this.debtRecord[i].name;
      }
    }
    return "Unknown user";
  }

  getProfilePic(userID: Number) {
    for (var i = 0; i < this.debtRecord.length; i++) {
      if (this.debtRecord[i].userID == userID) {
        return this.debtRecord[i].profilePic;
      }
    }
    return "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg";
  }
}
