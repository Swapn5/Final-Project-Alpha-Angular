import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewENComponent } from './view-en.component';

describe('ViewENComponent', () => {
  let component: ViewENComponent;
  let fixture: ComponentFixture<ViewENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewENComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
