import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {LoginCredentials, LoginPageService} from "./login-page.service";
import {finalize} from "rxjs";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {
  public loginForm: FormGroup;
  forgotPasswordUrl: any;
  public isLoading = false;
  public errorMessage: string | null = null;

  constructor(private loginPageService: LoginPageService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginPageService.login(this.getLoginRequest())
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe(value => {
        console.log(value)
      })
  }

  private getLoginRequest(): LoginCredentials {
    return {
      email: this.loginForm.controls['email'].value || '',
      password: this.loginForm.controls['password'].value || ''
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
