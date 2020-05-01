import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicNavbarComponent } from './basic-navbar.component';

describe('BasicNavbarComponent', () => {
  let component: BasicNavbarComponent;
  let fixture: ComponentFixture<BasicNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
