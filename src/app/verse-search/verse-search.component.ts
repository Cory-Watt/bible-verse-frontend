import { Component } from '@angular/core';
import { BibleServiceService } from '../bible-service.service';
import { BibleVerse } from '../model/bible-verse.model';

@Component({
  selector: 'app-verse-search',
  templateUrl: './verse-search.component.html',
  styleUrls: ['./verse-search.component.css']
})
export class VerseSearchComponent {
  searchQuery: string = '';
  searchResults: BibleVerse[] = [];

  constructor(private bibleService: BibleServiceService) {}

  onSearch(): void {
    if (this.searchQuery) {
      // Send a GET request to your backend API to perform the search
      this.bibleService.searchVersesByText(this.searchQuery)
        .subscribe((results: BibleVerse[]) => {
          this.searchResults = results;
        });
    }
  }
}