import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { PostrestaurentmentComponent } from './postrestaurentment/postrestaurentment.component';
import {HttpClientModule} from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { CommentComponent } from './comment/comment.component'
@NgModule({
  declarations: [
    AppComponent,
    PostrestaurentmentComponent,
    RegistrationComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
