import { TestBed } from '@angular/core/testing';

import { SaveProductService } from './save-product.service';

describe('SaveProductService', () => {
  let service: SaveProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
