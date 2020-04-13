import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YiqingBodyComponent } from './yiqing-body.component';

describe('YiqingBodyComponent', () => {
  let component: YiqingBodyComponent;
  let fixture: ComponentFixture<YiqingBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YiqingBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YiqingBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
