// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  message: string;
  token: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/login';
  private tokenKey = 'authToken';

  constructor(private http: HttpClient) {}

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, credentials).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem(this.tokenKey, response.token); // Store token in local storage
        }
      }),
      catchError(error => {
        console.error('Login failed', error);
        return of({ message: 'Login failed', token: null });
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey); // Remove token on logout
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey); // Check if token exists
  }
}
