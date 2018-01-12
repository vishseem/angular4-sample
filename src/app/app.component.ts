import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  email = 'test@techmahindra.com';
  address: Address;
  hobbies: string[];
  flag: boolean;
  imgPath: string;

  constructor() {
    this.title = 'Welcome'
    this.email = 'test@techmahindra.com'
    this.address = {
      city: 'San Diego',
      state: 'California',
      country: 'United States'
    }
    this.hobbies = ['Music', 'Photography', 'NAD']
    this.flag = false;
    this.imgPath = '../assets/ddd.jpg';
  }

  playHobby(): void {
    this.flag = !this.flag;
  }

  addHobby(hob): void {
    this.hobbies.push(hob);
  }
}

interface Address {
  city: string;
  state: string;
  country: string;
}
