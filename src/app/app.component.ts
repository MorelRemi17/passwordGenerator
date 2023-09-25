import { Component } from '@angular/core';
import { PasswordService } from './password.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  passwordLength: number = 8;
  includeSymbols: boolean = false;
  includeNumber: boolean = false;
  includeUppercase: boolean = false;
  generatedPassword: string | null = null;

  constructor(private passwordService: PasswordService) {}

  generate(): void {
    this.generatedPassword = this.passwordService.generatePassword(
      this.passwordLength,
      this.includeSymbols,
      this.includeNumber,
      this.includeUppercase
    );
  }
  copyPassword(): void {
    const textArea = document.createElement('textarea');
    textArea.value = this.generatedPassword ? this.generatedPassword : '';
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }
}
