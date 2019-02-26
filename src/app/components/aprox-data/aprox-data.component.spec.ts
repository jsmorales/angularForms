import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AproxDataComponent } from './aprox-data.component';

describe('AproxDataComponent', () => {
  let component: AproxDataComponent;
  let fixture: ComponentFixture<AproxDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AproxDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AproxDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
