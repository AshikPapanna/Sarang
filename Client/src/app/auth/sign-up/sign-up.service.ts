import {Injectable, Inject, InjectionToken} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
//export const Base_Url=new InjectionToken<string>('BaseURL');
@Injectable()
export class SignUpService{
    constructor(private http:HttpClient
       ,@Inject('BaseURL') private baseUrl:string
        ){}
    signUp(){
        this.http.get(this.baseUrl+'api/auth/google')
       console.log(this.baseUrl+'api/auth/google');
    }
}