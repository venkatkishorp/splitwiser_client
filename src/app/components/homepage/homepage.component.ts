import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { DebtRecordsComponent } from '../debt-records/debt-records.component';
import { CreditRecordsComponent } from '../credit-records/credit-records.component';
import Records from '../../../assets/userDatabase.json';

@Component({
  selector: 'app-homepage',
  imports: [SidebarComponent, HeaderComponent, MatTabsModule, DebtRecordsComponent, CreditRecordsComponent, DecimalPipe],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  totalBalance: number = 0;

  ngOnInit(): void {
    for (let group of Records[0].groupBalances) {
      for (let expense of group.friendBalances) {
        this.totalBalance += Number(expense[1]);
      }
    }
  }
}
