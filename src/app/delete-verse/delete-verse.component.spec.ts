import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVerseComponent } from './delete-verse.component';

describe('DeleteVerseComponent', () => {
  let component: DeleteVerseComponent;
  let fixture: ComponentFixture<DeleteVerseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteVerseComponent]
    });
    fixture = TestBed.createComponent(DeleteVerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
