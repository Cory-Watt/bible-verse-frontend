import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BibleVerse } from './model/bible-verse.model';

@Injectable({
  providedIn: 'root'
})
export class BibleServiceService {
  private apiBaseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Get all Bible verses
  getVerses(): Observable<BibleVerse[]> {
    return this.http.get<BibleVerse[]>(`${this.apiBaseUrl}/books`);
  }

  // Get chapters by book
  getChaptersByBook(book: string): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiBaseUrl}/books/${book}/chapters`);
  }

  // Get verses by book and chapter
  getVersesByBookAndChapter(book: string, chapter: number): Observable<BibleVerse[]> {
    return this.http.get<BibleVerse[]>(`${this.apiBaseUrl}/books/${book}/chapters/${chapter}/verses`);
  }

  // Get a single Bible verse by ID
  getVerseById(id: string): Observable<BibleVerse> {
    return this.http.get<BibleVerse>(`${this.apiBaseUrl}/verses/${id}`);
  }

  // Search for verses by text
  searchVersesByText(searchText: string): Observable<BibleVerse[]> {
    return this.http.get<BibleVerse[]>(`${this.apiBaseUrl}/search/${searchText}`);
  }

  // Delete a Bible verse by ID
  deleteVerseById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/verses/${id}`);
  }

  // Update a Bible verse by ID
  updateVerseById(id: number, verse: BibleVerse): Observable<void> {
    return this.http.put<void>(`${this.apiBaseUrl}/verses/${id}`, verse);
  }

  // Create a new Bible verse
  createVerse(verse: BibleVerse): Observable<BibleVerse> {
    return this.http.post<BibleVerse>(`${this.apiBaseUrl}/verses`, verse);
  }
}
