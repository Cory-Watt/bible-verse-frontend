import { Component } from '@angular/core';
import { BibleServiceService } from '../bible-service.service';
import { BibleVerse } from '../model/bible-verse.model';

@Component({
  selector: 'app-list-verse',
  templateUrl: './list-verse.component.html',
  styleUrls: ['./list-verse.component.css']
})
export class ListVerseComponent {
  book: string | null = null;
  chapter: number | null = null;
  verses: BibleVerse[] = [];

  constructor(private bibleService: BibleServiceService) { }

  onBookInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.book = inputElement.value;
  }

  onChapterInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.chapter = value !== '' ? parseInt(value, 10) : null;
  }

  isFormValid(): boolean {
    return !!this.book && this.chapter !== null;
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      // Fetch the list of Bible verses for the specified book and chapter
      this.bibleService.getVersesByBookAndChapter(this.book!, this.chapter!)
        .subscribe((data: BibleVerse[]) => {
          this.verses = data;
        });
    }
  }
}
