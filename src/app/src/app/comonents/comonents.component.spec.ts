import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComonentsComponent } from './comonents.component';

describe('ComonentsComponent', () => {
  let component: ComonentsComponent;
  let fixture: ComponentFixture<ComonentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComonentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComonentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
