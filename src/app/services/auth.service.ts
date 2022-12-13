import {Injectable} from '@angular/core';
import {User} from "../interfaces/user";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment"
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  userListUrl = environment.serverUrl + 'users';
  users: User[] = [];
  token: string | null = '';
  errorMessage: string = '';

  login(user: User): Observable<boolean> {
    return this.http.get<User[]>(this.userListUrl).pipe(
      map((userData) => {
          let isValid = false;
          const isValidUser = userData.find((item) => item.email === user.email && item.password === user.password);
          if (isValidUser) {
            this.token = 'Example-Token';
            localStorage.setItem('auth-token', this.token)
            isValid = true;
          } else {

            if (!userData.find((item) => item.email === user.email && item.password === user.password)) {
              this.errorMessage = 'Incorrect email or password'
              if (!userData.find((item) => item.email === user.email)) {
                this.errorMessage = 'User with this email not found'
              }
            }
          }
          console.log('servis', this.errorMessage)
          return isValid;
        }
      )
    )
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.userListUrl, user)
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('auth-token') === 'Example-Token') {
      return true
    } else {
      return false
    }
  }

  logOut() {
    this.token = null
    localStorage.clear()
  }
}
