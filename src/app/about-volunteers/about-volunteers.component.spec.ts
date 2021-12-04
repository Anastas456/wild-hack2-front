import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutVolunteersComponent } from './about-volunteers.component';

describe('AboutVolunteersComponent', () => {
  let component: AboutVolunteersComponent;
  let fixture: ComponentFixture<AboutVolunteersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutVolunteersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutVolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
