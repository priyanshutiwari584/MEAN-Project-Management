import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProjectCardComponent } from './project-card/project-card.component';
import { CommonModule } from '@angular/common';
import { ProjectFormComponent } from './project-form/project-form.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { ProjectQueryComponent } from './project-query/project-query.component';
import { ReplyQueryComponent } from './reply-query/reply-query.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    DashboardComponent,
    SignInComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ProjectFormComponent,
    ProjectModalComponent,
    ProjectQueryComponent,
    ReplyQueryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    FormsModule,
    EditorModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
