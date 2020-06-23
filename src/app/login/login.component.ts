import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'COVID 19 Safety Induction Checklist';
  constructor(private router: Router,
              private loginservice: AuthenticationService) { }

  empId = '';
  invalidLogin = false;
  valid = true;

  ngOnInit() {
  }
  checkLogin() {
    /* this.loginservice.updatedDataSelection(this.empId); */
    (this.loginservice.authenticate(this.empId).subscribe(
      data => {
        this.valid = data;
        if (data != null) {
        this.router.navigate(['formDetails']);
        this.invalidLogin = false;
        }

      },
      error => {
        this.invalidLogin = true;
      }
    )
    );
  }
}
