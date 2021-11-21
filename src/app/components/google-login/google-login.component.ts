import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../app.component';
import { Router } from '@angular/router';
import { AuthService } from 'angular4-social-login';
import {GoogleLoginProvider} from 'angular4-social-login';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent implements OnInit {

  constructor(private _socialAuth : AuthService,private route: Router,private AppComponent : AppComponent) { }

  ngOnInit() {
  }

  signInWithGoogle() : void
  { 
    this._socialAuth.signIn(GoogleLoginProvider.PROVIDER_ID).then((response)=>{
      console.warn(response)
      this.route.navigate(['/home'] );
    });
   
  }
  signOut() : void
  {
    this._socialAuth.signOut();
    console.warn("User Signed Out")
  }
}
