import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth/auth.service';
import { sha256 } from 'js-sha256';
import { TokenService } from '../../../../core/services/token/token.service';
import { UserResponse } from '../../../../models/auth/userResponse.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authservice: AuthService,
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
    if (this.signInForm.valid) {
      this.authservice.singIn({
        email: this.signInForm.value.email,
        password: sha256(this.signInForm.value.password)
      }).subscribe({
        next: (r: UserResponse) => {
          localStorage.setItem('basicEcommerce.currentUser', JSON.stringify(r));
        },
        error: () => {}
      });
    }
  }
}
