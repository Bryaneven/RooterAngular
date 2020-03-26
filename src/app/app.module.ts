import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SigninComponent } from './signin/signin.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SigninComponent,
    UserProfilComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
