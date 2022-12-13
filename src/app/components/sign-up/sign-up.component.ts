import {Component, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

  constructor(
    private auth: AuthService,
    private router: Router
  ){ }

  @Output() formData;
  formIsActive: boolean = true;
  aSub!:Subscription;

  ngOnInit(): void {
  }

  getUserData(event){
    this.formData = event
    this.aSub = this.auth.register(this.formData).subscribe(
      () => {
        this.router.navigate(['/login'], {
          queryParams: {
            registered: true
          }
        })
      },
      error => {
        console.warn(error)
      })
  }

  ngOnDestroy() {
    if (this.aSub){
      this.aSub.unsubscribe()
    }
  }
}
