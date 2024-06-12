import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
dashBoardItems: string[] =['Home', 'About', 'Services', 'Login', 'Signup', 'Logout'];
}
