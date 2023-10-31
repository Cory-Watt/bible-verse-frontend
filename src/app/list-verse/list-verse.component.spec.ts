import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVerseComponent } from './list-verse.component';

describe('ListVerseComponent', () => {
  let component: ListVerseComponent;
  let fixture: ComponentFixture<ListVerseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListVerseComponent]
    });
    fixture = TestBed.createComponent(ListVerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
