import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListVerseComponent } from './list-verse/list-verse.component';
import { BibleServiceService } from './bible-service.service';
import { VerseSearchComponent } from './verse-search/verse-search.component';
import { VerseCreateComponent } from './verse-create/verse-create.component';
import { DeleteVerseComponent } from './delete-verse/delete-verse.component';
import { VerseEditComponent } from './verse-edit/verse-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListVerseComponent,
    VerseSearchComponent,
    VerseCreateComponent,
    DeleteVerseComponent,
    VerseEditComponent
  ],
  imports: [
    BrowserModule, // Import BrowserModule for browser-based applications
    AppRoutingModule, // Import application's routing module
    RouterModule, // Import RouterModule for routing functionality
    HttpClientModule, // Import HttpClientModule for HTTP requests
    FormsModule, // Import FormsModule for two-way data binding
    ReactiveFormsModule, // Import ReactiveFormsModule for reactive forms
  ],
  providers: [BibleServiceService], // Provide your service
  bootstrap: [AppComponent] // Bootstrap the main application component
})
export class AppModule { }
