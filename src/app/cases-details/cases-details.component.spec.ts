import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesDetailsComponent } from './cases-details.component';

describe('CaseDetailsComponent', () => {
  let component: CasesDetailsComponent;
  let fixture: ComponentFixture<CasesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
