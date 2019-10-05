import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { AuthService, AuthResponseData } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html'
})

export class AuthComponent {
  constructor(private authService: AuthService) {}
  isLoginMode = false;
  isLoading = false;
  error: string = null;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;
    if (this.isLoginMode) {
      authObs = this.authService.Login(email, password);
    } else {
      authObs = this.authService.Signup(email, password);
    }
    authObs.subscribe((responseData) => {
      console.log(responseData);
      this.isLoading = false;
     }, (errorMessage) => {
       this.error = errorMessage;
       console.log(errorMessage);
       this.isLoading = false;
     });
    form.reset();
  }
}
