import { TestBed } from '@angular/core/testing';

import { CardlistService } from './cardlist.service';

describe('CardlistService', () => {
  let service: CardlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
