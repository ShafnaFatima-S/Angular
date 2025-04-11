import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllnoteComponent } from './allnote.component';

describe('AllnoteComponent', () => {
  let component: AllnoteComponent;
  let fixture: ComponentFixture<AllnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllnoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
