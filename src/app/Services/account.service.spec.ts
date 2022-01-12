import "jasmine";

import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AccountService', () => {
  let service: AccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ]
    });
    service = TestBed.inject(AccountService);
  });
});
