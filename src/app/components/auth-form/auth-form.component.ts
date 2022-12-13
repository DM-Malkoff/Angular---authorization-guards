import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {User} from "../../interfaces/user";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  constructor(private route:ActivatedRoute) {
  }

  @Input() page;
  @Output() formData = new EventEmitter();
  @Input() formIsActive;
  @Input() errorMessage;

  hidePassword = true;
  hideRepeatPassword = true;
  caption:string = '';
  formButtonText:string = '';
  access: boolean = false
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)])

  ngOnInit(): void {

      this.route.queryParams.subscribe(params => {

        if (params['registered']){
          this.access = true
        } else {
          if (params['accessDenied']){
            this.access = false
          }
        }
      })
      if (this.page === 'authorization'){
        this.formButtonText = 'Login'
        this.caption = 'Sign in'
      }
      if (this.page === 'sign-up'){
        this.formButtonText = 'Register'
        this.caption = 'Sign Up'
      }
    }

  getErrorMessage(type: string) {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    if (type === 'password') {
      return this.password.hasError('minlength') ? 'The password must contain at least 6 characters' : '';
    }
    if (type === 'email') {
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }
    return ''
  }

  onSubmit(e) {
    const userData = {
      email: this.email.value,
      password: this.password.value
    }
    this.formData.emit(userData)
  }
}
