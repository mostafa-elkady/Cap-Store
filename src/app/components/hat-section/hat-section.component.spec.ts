import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HatSectionComponent } from './hat-section.component';

describe('HatSectionComponent', () => {
  let component: HatSectionComponent;
  let fixture: ComponentFixture<HatSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HatSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HatSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
