import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit, OnDestroy {
  formData;
  formIsActive: boolean = true;
  aSub!: Subscription;
  errorMessage: string = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {

  }

  getUserData(event) {
    this.formIsActive = false
    this.formData = event
    this.aSub = this.auth.login(this.formData).subscribe(res => {
        if (res) {
          this.router.navigate(['/inner'])
        } else {
          this.errorMessage = this.auth.errorMessage
          this.formIsActive = true
        }
      },
      error => {
        console.log(error)
        this.formIsActive = true
      })
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }
}
