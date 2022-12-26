import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '@core/services/alert/alert.service';
import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private alertService: AlertService,
    private authservice: AuthService
  ) {
    this.FormBuilder();
  }

  private FormBuilder(): void {
    this.signInForm = this.fb.group({
      email: [null, [Validators.required, Validators.pattern(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)]],
      password: [null, [Validators.required, Validators.pattern(/^.{4,}$/)]]
    });
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    this.authservice.singInApi({
      userName: 'Admin',
      password: 'Admin'
    }).subscribe( (r: string ) => console.log('adasd'+ r));
    if (this.signInForm.valid) {
      // code
    }
  }
}
