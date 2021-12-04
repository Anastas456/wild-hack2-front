import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CordonsComponent } from './cordons.component';

describe('CordonsComponent', () => {
  let component: CordonsComponent;
  let fixture: ComponentFixture<CordonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CordonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CordonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
