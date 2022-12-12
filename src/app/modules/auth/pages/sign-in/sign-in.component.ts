import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '@core/services/alert/alert.service';

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
    private alertService: AlertService
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
    this.alertService.showErrorMessage("Test");
    if (this.signInForm.valid) {
      // code
    }
  }
}
