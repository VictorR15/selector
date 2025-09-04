import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSelectorComponent } from './ngx-selector.component';

describe('NgxSelectorComponent', () => {
  let component: NgxSelectorComponent;
  let fixture: ComponentFixture<NgxSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
