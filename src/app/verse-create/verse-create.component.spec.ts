import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerseCreateComponent } from './verse-create.component';

describe('VerseCreateComponent', () => {
  let component: VerseCreateComponent;
  let fixture: ComponentFixture<VerseCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerseCreateComponent]
    });
    fixture = TestBed.createComponent(VerseCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
