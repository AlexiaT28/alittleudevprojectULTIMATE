import { TestBed } from '@angular/core/testing';

import { CometogetherService } from './cometogether.service';

describe('CometogetherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CometogetherService = TestBed.get(CometogetherService);
    expect(service).toBeTruthy();
  });
});
