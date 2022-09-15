import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern("^[a-zA-Z0-9]+$")]),
    checkbox: new FormControl()
  })
  get f() {
    return this.loginForm.controls;
  }

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.loginForm.value);
  }



}
