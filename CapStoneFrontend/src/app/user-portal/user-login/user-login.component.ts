import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, catchError } from 'rxjs';
import { Router } from '@angular/router';

interface User {
  lname:String;
  fname:String;
  email:String;
  password:String;
  admin:boolean;
}

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  private loginUrl = 'http://localhost:9092/userLogin';
  
  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json"
  });


  login(value:any){
        
    const user = <User>{
      email:value.email,
      password:value.password,
    }

    return this.http.post(this.loginUrl,user, {
      headers: this.headers, responseType: 'text'})
      .pipe(catchError(error => this.handleError(error)))
      .subscribe(response => {console.log("Successfull: ", response); this.redirect()})
  }

  private redirect(): void {
    this.router.navigate([ "/chooseCart" ]);

  }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error("An error occurred:", error.error.message);
    }else{
      console.error('Backend returned code ${error.status}, ' + 'body was: ${error.error}');
    }
    return throwError(() => new Error("Something bad happened; please try again later"));
  }

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

}
