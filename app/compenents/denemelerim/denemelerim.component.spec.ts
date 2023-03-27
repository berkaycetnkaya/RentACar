import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenemelerimComponent } from './denemelerim.component';

describe('DenemelerimComponent', () => {
  let component: DenemelerimComponent;
  let fixture: ComponentFixture<DenemelerimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenemelerimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DenemelerimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
