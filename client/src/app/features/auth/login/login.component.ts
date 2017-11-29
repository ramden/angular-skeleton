import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {AlertService} from '@app/shared/alert.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from '@app/../environments/environment';

@Component({
  moduleId: module.id,
  styleUrls: ['login.component.scss'],
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  loading = false;
  returnUrl: string;

  public loginForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private alertService: AlertService,
              private fb: FormBuilder) {
    this.loginForm = fb.group({
      username: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  get authConfig() {
    return environment.auth;
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false
    }, 5000);

    /*
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
        */
  }
}
