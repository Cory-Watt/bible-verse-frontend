import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BibleServiceService } from '../bible-service.service';
import { BibleVerse } from '../model/bible-verse.model';

@Component({
  selector: 'app-verse-edit',
  templateUrl: './verse-edit.component.html',
  styleUrls: ['./verse-edit.component.css']
})
export class VerseEditComponent {
  verseId: number | null = null; // Initialize 'verseId' as null
  editedVerse: BibleVerse = {
    book: null, // Initialize 'book' as null
    chapter: null, // Initialize 'chapter' as null
    verseNumber: null, // Initialize 'verseNumber' as null
    text: '' // Initialize 'text' as an empty string
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bibleService: BibleServiceService
  ) {
    // Extract the verseId from the route parameters
    this.route.paramMap.subscribe(params => {
      const verseIdParam = params.get('verseId');
      if (verseIdParam) {
        this.verseId = parseInt(verseIdParam, 10); // Parse 'verseId' as an integer
      }
    });
  }

  onSubmit(): void {
    if (this.verseId !== null) {
      // Send a PUT request to your backend API to update the verse
      this.bibleService.updateVerseById(this.verseId, this.editedVerse)
        .subscribe(() => {
          // Handle the response, e.g., show a success message
          console.log('Verse updated successfully');
          // Optionally, navigate to another page after updating
          this.router.navigate(['/books']); // Navigate to the '/books' route
        });
    }
  }
}
