import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreetiComponent } from './preeti.component';

describe('PreetiComponent', () => {
  let component: PreetiComponent;
  let fixture: ComponentFixture<PreetiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreetiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
