import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthPayload } from './auth-payload';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {


    constructor(private http: HttpClient) { }
    
    login(email: string, password: string) {
        return this.http.post<AuthPayload>('http://finance-tracker.api.com:8000/api/login', {email: email, password: password})
            .pipe(map(response => {
                localStorage.setItem('token', response.token);
            }))
        ; 
    }

    public isAuthenticated(): boolean {
        //const jwtHelper = new JwtHelperService();
        const token = localStorage.getItem('token') || undefined;
        return token !== undefined; // cant validate if is expired because is not a jwt?
        //return !jwtHelper.isTokenExpired(token);
    }
}
