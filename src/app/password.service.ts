import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  constructor() {}

  generatePassword(
    length: number,
    includeSymbols: boolean,
    includeNumbers: boolean,
    includeUppercase: boolean
  ): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!";#$%&()*+,-./:;<=>?@[]^_{|}~';
    const numbers = '0123456789';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let characters = chars;
    if (includeSymbols) {
      characters += symbols;
    }
    if (includeNumbers) {
      characters += numbers;
    }
    if (includeUppercase) {
      characters += uppercase;
    }

    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }
}
