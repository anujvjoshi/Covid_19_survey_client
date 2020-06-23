import { AuthenticationService } from './services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'COVID 19 Safety Induction Checklist';
  constructor(public loginService: AuthenticationService){ }
  ngOnInit() {
  }
}
