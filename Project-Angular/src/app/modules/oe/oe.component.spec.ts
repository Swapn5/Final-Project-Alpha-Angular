import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OeComponent } from './oe.component';

describe('OeComponent', () => {
  let component: OeComponent;
  let fixture: ComponentFixture<OeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
