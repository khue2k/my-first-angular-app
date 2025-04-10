import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, throwError} from "rxjs";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  message?: string;
  status?: number;
  data?: any;
}

@Injectable({
  providedIn: 'root' // Cung cấp service ở root injector (singleton cho toàn ứng dụng)
})
export class LoginPageService {
  private baseUrl: string = 'http://localhost:8080/api';
  private httpOptions: object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {

  }

  login(loginCredentials: LoginCredentials) {
    return this.http.post<LoginResponse>(
      `${this.baseUrl}/login`,
      loginCredentials
    ).pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Đã xảy ra lỗi không xác định';
    if (error.error instanceof ErrorEvent) {
      // Lỗi phía client
      errorMessage = `Lỗi: ${error.error.message}`;
    } else {
      // Lỗi từ server
      errorMessage = `Mã lỗi: ${error.status}\nThông báo: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }


}
