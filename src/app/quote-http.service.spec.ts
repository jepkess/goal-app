import { TestBed } from '@angular/core/testing';

import { QuoteHttpService } from './quote-http.service';

describe('QuoteHttpService', () => {
  let service: QuoteHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
