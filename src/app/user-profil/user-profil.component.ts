import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {
  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    hideAge: true,
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
  constructor() { }

  ngOnInit(): void {
  }
  showAge(): void {
    if (this.User.hideAge === true) {
    this.User.hideAge = false;
    } else {
      this.User.hideAge = true;
    }
  }
}
