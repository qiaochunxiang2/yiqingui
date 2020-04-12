import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YiqinghistoryComponent } from './yiqinghistory.component';

describe('YiqinghistoryComponent', () => {
  let component: YiqinghistoryComponent;
  let fixture: ComponentFixture<YiqinghistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YiqinghistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YiqinghistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
