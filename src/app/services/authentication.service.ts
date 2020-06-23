import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export class User {
  constructor(
    public status: string,
  ) { }

}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  /* public dataSource = new BehaviorSubject<string>('');

  updatedDataSelection(data: string){
    console.log('data', data);
    this.dataSource.next(data);
  } */

  authenticate(empId): any {
    console.log(empId);
    return this.httpClient.get<any>('http://192.168.60.73:8080/validateEmp/' + empId).pipe(
      map(
        userData => {
          if (userData.responseData){
          localStorage.setItem('currentUser', userData.responseData);
          this.currentUserSubject.next(userData.responseData);
          return userData;
          }
        }
       )
    );
  }

  isUserLoggedIn() {
    const user = localStorage.getItem('currentUser');
    return !(user === null);
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
