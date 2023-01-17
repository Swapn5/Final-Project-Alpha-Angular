import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhComponent } from './ah.component';

describe('AhComponent', () => {
  let component: AhComponent;
  let fixture: ComponentFixture<AhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
