import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Auth } from '../models/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  form = this.fb.group({
    username: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required)
  })

  submitted: boolean = false;
  loginError: string = '';

  constructor(
    private fb: FormBuilder, 
    private _authService: AuthService,
    private router: Router) { }

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
    this.loginError = '';

    if (this.form.valid) {
      const form: Auth = {
        username: this.form.controls.username.value?.toString() || '',
        password: this.form.controls.password.value?.toString() || ''
      }

      this._authService.login(form).then(res => {
        if (res.token) {
          //login successful
          localStorage.setItem('token', res.token);
          localStorage.setItem('username', form.username);
          //clear the form
          this.form.patchValue({username: '', password: ''});
          this.submitted = false;
          this.router.navigate(['/','feed']);
        }
      })
      .catch(err => {
        this.submitted = false;
        this.loginError = err;
      })
    }
  }

}
