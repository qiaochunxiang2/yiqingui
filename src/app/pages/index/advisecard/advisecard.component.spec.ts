import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisecardComponent } from './advisecard.component';

describe('AdvisecardComponent', () => {
  let component: AdvisecardComponent;
  let fixture: ComponentFixture<AdvisecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
