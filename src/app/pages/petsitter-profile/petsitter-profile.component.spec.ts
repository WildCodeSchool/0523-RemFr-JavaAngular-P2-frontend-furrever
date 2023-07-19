import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsitterProfileComponent } from './petsitter-profile.component';

describe('PetsitterProfileComponent', () => {
  let component: PetsitterProfileComponent;
  let fixture: ComponentFixture<PetsitterProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsitterProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetsitterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
