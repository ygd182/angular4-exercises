import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, FormsModule } from '@angular/forms'; 
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginError: boolean;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  loginForm: FormGroup = this.formBuilder.group({
    email: this.email,
    password: this.password
  });

  constructor (private formBuilder: FormBuilder,
  			   private router: Router,
  			   private authService: AuthService) { }

  ngOnInit() {
  	this.loginError = false;
  }

  login($event) {
    console.log(this.loginForm.value);
    console.log(this.loginForm.status);
    // Attempt Logging in...

    if(this.loginForm.valid) {
    	this.router.navigate(['/artist-list']);
    	this.saveToken();
    } else {
    	this.loginError = true;
    }
  }

  onSubmit({ value, valid }: { value: any, valid: boolean }) {
  	if(valid) {
  		this.saveToken();
  		this.router.navigate(['/artist-list']);
  	}
  	
    console.log(value, valid);
  }

  saveToken() {
  	this.authService.login();
  	sessionStorage.setItem('token', 'something');
  }

}
