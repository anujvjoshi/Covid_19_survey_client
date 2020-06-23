import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDetailsService {

  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getQuestionsList(): Observable<any> {
    return this.http.get(`http://192.168.60.73:8080/getAllQuestionsWithOptions`);
  }

  submitFormData(formDetails: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, formDetails);
  }

}
