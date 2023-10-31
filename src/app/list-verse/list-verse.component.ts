import { Component } from '@angular/core';
import { BibleServiceService } from '../bible-service.service';
import { BibleVerse } from '../model/bible-verse.model';

@Component({
  selector: 'app-list-verse',
  templateUrl: './list-verse.component.html',
  styleUrls: ['./list-verse.component.css']
})
export class ListVerseComponent {
  book: string | null = null; // Initialize 'book' as null
  chapter: number | null = null; // Initialize 'chapter' as null
  verses: BibleVerse[] = []; // Initialize 'verses' as an empty array

  constructor(private bibleService: BibleServiceService) { }

  onBookInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.book = inputElement.value; // Update 'book' with the input value
  }

  onChapterInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.chapter = value !== '' ? parseInt(value, 10) : null; // Parse 'chapter' value to an integer or set it to null if empty
  }

  isFormValid(): boolean {
    return !!this.book && this.chapter !== null; // Check if 'book' is not null and 'chapter' is not null
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      // Fetch the list of Bible verses for the specified book and chapter
      this.bibleService.getVersesByBookAndChapter(this.book!, this.chapter!)
        .subscribe((data: BibleVerse[]) => {
          this.verses = data; // Update 'verses' with the retrieved data
        });
    }
  }
}
