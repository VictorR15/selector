import { TestBed } from '@angular/core/testing';

import { NgxSelectorService } from './ngx-selector.service';

describe('NgxSelectorService', () => {
  let service: NgxSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
