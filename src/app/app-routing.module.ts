import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVerseComponent } from './list-verse/list-verse.component';
import { VerseCreateComponent } from './verse-create/verse-create.component';
import { DeleteVerseComponent } from './delete-verse/delete-verse.component';
import { VerseSearchComponent } from './verse-search/verse-search.component';
import { VerseEditComponent } from './verse-edit/verse-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: ListVerseComponent },
  { path: 'books/:book/chapters/:chapter/verses', component: ListVerseComponent },
  { path: 'verse/create', component: VerseCreateComponent },
  { path: 'verse/delete', component: DeleteVerseComponent },
  { path: 'verse/search', component: VerseSearchComponent },
  { path: 'verse/edit', component: VerseEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
