import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YiqingformComponent } from './yiqingform.component';

describe('YiqingformComponent', () => {
  let component: YiqingformComponent;
  let fixture: ComponentFixture<YiqingformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YiqingformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YiqingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
