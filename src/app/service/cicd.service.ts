import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CicdService {

  private apiUrl: string = environment.api_url;
  private testApi: string = '/test';
  private testEnv : string = '/env';


  constructor(private http : HttpClient) { }

  getTest() {
    console.log('fetching test api ', this.apiUrl+this.testApi);
    return this.http.get<any>(this.apiUrl+this.testApi).pipe(
      catchError(this.handleError),
      map ( (res: HttpResponse<any>) => this.handleResponse(res))
    );
  }


  getEnv() {
    console.log('fetching test api');
    return this.http.get<any>(this.apiUrl+this.testEnv).pipe(
      catchError(this.handleError),
      map ( (res: HttpResponse<any>) => this.handleResponse(res))
    );
  }


  handleResponse(res: HttpResponse<any>): any {
    console.log(res.status, res);
    return res;
  }

  handleError (error) {
    console.log(error)
    return throwError(error.message || 'Error In API');
  }

}
