import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerseEditComponent } from './verse-edit.component';

describe('VerseEditComponent', () => {
  let component: VerseEditComponent;
  let fixture: ComponentFixture<VerseEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerseEditComponent]
    });
    fixture = TestBed.createComponent(VerseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
