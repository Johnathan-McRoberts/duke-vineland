import { TestBed } from '@angular/core/testing';

import { BookTablesService } from './book-tables-service.service';

describe('BookTablesServiceService', () => {
  let service: BookTablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookTablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
