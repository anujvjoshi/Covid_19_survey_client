import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class User {
  constructor(
    public status: string,
  ) { }

}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  authenticate(empId): any {
    console.log(empId);
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(empId) });

    return this.httpClient.get('http://192.168.60.73:8080/validateEmp/' + empId);

    // return this.httpClient.get<User>('http://192.168.60.73:8080/validateEmp/' + empId, { headers }).pipe(
     // map(
       // userData => {
         // sessionStorage.setItem('empId', empId);
         // const authString = 'Basic ' + btoa(empId);
         // sessionStorage.setItem('basicauth', authString);
          // return userData;
       // }
      // )

   // );
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('empId');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('empId');
  }
}
