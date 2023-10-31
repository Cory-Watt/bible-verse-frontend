import { Component } from '@angular/core';
import { BibleServiceService } from '../bible-service.service';
import { BibleVerse } from '../model/bible-verse.model';

@Component({
  selector: 'app-verse-create',
  templateUrl: './verse-create.component.html',
  styleUrls: ['./verse-create.component.css']
})
export class VerseCreateComponent {
  newVerse: BibleVerse = {
    book: null,
    chapter: null,
    verseNumber: null,
    text: ''
  };

  constructor(private bibleService: BibleServiceService) { }

  onSubmit(): void {
    // Send the new verse data to your backend API using your service
    this.bibleService.createVerse(this.newVerse)
      .subscribe((response) => {
        // Handle the response, e.g., show a success message or navigate to another page
        console.log('Verse created:', response);
      });
  }
}
