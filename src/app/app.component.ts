import { Component } from '@angular/core';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';

@Component({
  selector: 'app-root',
  imports: [HomepageComponent, LoginpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'splitwiser-frontend';

  userID: Number | null = null;
}
