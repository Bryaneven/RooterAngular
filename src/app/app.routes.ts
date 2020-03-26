import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { UserProfilComponent } from './user-profil/user-profil.component';


const ROUTES: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'user-profil', component: UserProfilComponent },
  { path: '', component: UserProfilComponent}
];


export { ROUTES };
