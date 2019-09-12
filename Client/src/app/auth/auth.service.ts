import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient
    , @Inject('BaseURL') private baseUrl: string
  ) { }

  signUp(user):Observable<any> {
    return this.http.post(this.baseUrl+'api/auth/signUp',user,this.httpOptions);
    //this.http.get(this.baseUrl + 'api/auth/google')
    console.log(this.baseUrl + 'api/auth/google');
  }

}
