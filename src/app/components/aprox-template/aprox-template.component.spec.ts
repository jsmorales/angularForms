import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AproxTemplateComponent } from './aprox-template.component';

describe('AproxTemplateComponent', () => {
  let component: AproxTemplateComponent;
  let fixture: ComponentFixture<AproxTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AproxTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AproxTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
