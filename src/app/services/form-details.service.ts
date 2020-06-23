import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpClientJsonpModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDetailsService {

  private baseUrl = 'http://192.168.60.73:8080/getAllQuestionsWithOptions';
  private baseUrl1 = 'http://192.168.60.73:8080/submitSurvey';

constructor(private http: HttpClient) { }


getQuestionsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`).pipe(map((response: any) => {
        return response.responseData;
    }));
  }

  // tslint:disable-next-line: ban-types
submitMyFormData(empQandA: any): Observable<Object> {
    const url: string = this.baseUrl1;
    const headers  = new  HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.baseUrl1}`, empQandA, { headers }).pipe(map((response: any) => {
      console.log(response.status);

      return response.responseData;
  }));
  }
}
