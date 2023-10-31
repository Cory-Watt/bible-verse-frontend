import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BibleServiceService } from '../bible-service.service';

@Component({
  selector: 'app-verse-delete',
  templateUrl: './delete-verse.component.html',
  styleUrls: ['./delete-verse.component.css']
})
export class DeleteVerseComponent {
  verseId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bibleService: BibleServiceService
  ) {
    // Extract the verseId from the route parameters
    this.route.paramMap.subscribe(params => {
      const verseIdParam = params.get('verseId');
      if (verseIdParam) {
        this.verseId = parseInt(verseIdParam, 10); // Parse the verseId as an integer
      }
    });
  }

  onDelete(): void {
    if (this.verseId !== null) {
      // Send a DELETE request to your backend API using your service
      this.bibleService.deleteVerseById(this.verseId)
        .subscribe(() => {
          // Handle the response, e.g., show a success message
          console.log('Verse deleted successfully');
          // Optionally, navigate to another page after deletion
          this.router.navigate(['/books']); // Navigate to the '/books' route
        });
    }
  }

  onCancel(): void {
    // Handle the cancel action, e.g., navigate back to the previous page
    this.router.navigate(['/books']); // Navigate to the '/books' route
  }
}
