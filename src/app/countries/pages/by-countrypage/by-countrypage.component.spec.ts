import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCountrypageComponent } from './by-countrypage.component';

describe('ByCountrypageComponent', () => {
  let component: ByCountrypageComponent;
  let fixture: ComponentFixture<ByCountrypageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByCountrypageComponent]
    });
    fixture = TestBed.createComponent(ByCountrypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
