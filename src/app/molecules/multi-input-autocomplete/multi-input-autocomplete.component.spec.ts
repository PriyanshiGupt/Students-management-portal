import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiInputAutocompleteComponent } from './multi-input-autocomplete.component';

describe('MultiInputAutocompleteComponent', () => {
  let component: MultiInputAutocompleteComponent;
  let fixture: ComponentFixture<MultiInputAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiInputAutocompleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiInputAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
