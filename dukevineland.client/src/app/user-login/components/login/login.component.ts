import { Component, inject, signal } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { LoggedInService } from '../../../shared/services/logged-in.service';
//import { LoggedInService } from './logged-in.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private loggedInService = inject(LoggedInService);

  protected readonly userNameValue = signal<string>('');
  protected readonly passwordValue = signal<string>('');

  protected onInputUserName(event: Event) {
    this.userNameValue.set((event.target as HTMLInputElement).value);
    console.log("hey I got the user of " + this.userNameValue());
  }

  protected onInputPassword(event: Event) {
    this.passwordValue.set((event.target as HTMLInputElement).value);
    console.log("hey I got the password as " + this.passwordValue());
  }


  submitLogin() {
    // Standard navigation
    /*this.router.navigate(['/import-export']);*/
    console.log("submit login for : u = " + this.userNameValue() + " p = " + this.passwordValue());

    this
      .loggedInService
      .getUserLogin(
            this.userNameValue(),
            this.passwordValue())
      .subscribe(
        resp =>
        {
          console.log('Updated resp:', JSON.stringify(resp));
        });
  }
}
