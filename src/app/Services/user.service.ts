import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {User} from "../Model/user";
import {Observable} from "rxjs";
import {
  RequestResponseCreateUser,
  RequestResponseDeleteUser,
  RequestResponseGetToken,
  RequestResponsesGetUsers
} from "../Interfaces/RequestResponses";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
  }

  eliminate(userToDelete: User, csrfToken: string): Observable<RequestResponseDeleteUser> {
    const params = new HttpParams().set('user_id', userToDelete.id).set('_token', csrfToken);
    const headers = this.headers;

    return this.http.delete<RequestResponseDeleteUser>('api/v1/user', {headers, params})

  }

  getUsers(): Observable<RequestResponsesGetUsers> {
    const headers = this.headers;

    return this.http.get<RequestResponsesGetUsers>('api/v1/user', {headers})
  }

  getToken(): Observable<RequestResponseGetToken> {
    const headers = this.headers;

    return this.http.get<RequestResponseGetToken>('api/v1/token', {headers})
  }

  create(user: User, csrfToken: string): Observable<RequestResponseCreateUser> {
    const params = new HttpParams()
      .set('_token', csrfToken)
      .set('user_name', user.name)
      .set('user_email', user.email)
      .set('user_civil_status', user.civil_status)
      .set('user_birth_date', user.birth_date)
      .set('user_phone', user.phone)

    return this.http.put<RequestResponseCreateUser>('api/v1/user', params)
  }
}
