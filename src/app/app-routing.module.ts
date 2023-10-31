import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVerseComponent } from './list-verse/list-verse.component';
import { VerseCreateComponent } from './verse-create/verse-create.component';
import { DeleteVerseComponent } from './delete-verse/delete-verse.component';
import { VerseSearchComponent } from './verse-search/verse-search.component';
import { VerseEditComponent } from './verse-edit/verse-edit.component';

// Define application's routes
const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' }, // Redirect empty path to '/books'
  { path: 'books', component: ListVerseComponent }, // Route to ListVerseComponent for '/books'
  { path: 'books/:book/chapters/:chapter/verses', component: ListVerseComponent }, // Route with dynamic parameters
  { path: 'verse/create', component: VerseCreateComponent }, // Route to VerseCreateComponent
  { path: 'verse/delete', component: DeleteVerseComponent }, // Route to DeleteVerseComponent
  { path: 'verse/search', component: VerseSearchComponent }, // Route to VerseSearchComponent
  { path: 'verse/edit', component: VerseEditComponent }, // Route to VerseEditComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
