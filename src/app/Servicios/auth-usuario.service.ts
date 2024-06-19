import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AuthUsuarioService {
  private loggedIn = new BehaviorSubject<boolean>(this.isLoggedIn());
  private userName = new BehaviorSubject<string>(this.getUserName());

  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    return this.http.post(`${baserUrl}/users/login`, loginData).pipe(
      map((response: any) => {
        if (response.message && response.message.startsWith('Bienvenido')) {
          this.setUserSession({ username, role: response.role });
          this.loggedIn.next(true);
          this.userName.next(username);
          return { success: true, message: response.message, role: response.role };
        }
        return { success: false, message: response.message };
      })
    );
  }

  public register(user: any): Observable<any> {
    return this.http.post(`${baserUrl}/users/register`, user).pipe(
      map((response: any) => {
        if (response && response.message) {
          return { success: true, message: response.message };
        } else {
          throw new Error('Unexpected response format');
        }
      })
    );
  }

  private setUserSession(data: any) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  public logout() {
    localStorage.removeItem('user');
    this.loggedIn.next(false);
    this.userName.next('');
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null;
  }

  public getCurrentUserRole(): string {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user = JSON.parse(userJson);
      return user.role || '';
    }
    return '';
  }

  public getUserName(): string {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user = JSON.parse(userJson);
      return user.username || '';
    }
    return '';
  }

  public isLoggedInObservable(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  public getUserNameObservable(): Observable<string> {
    return this.userName.asObservable();
  }
}
