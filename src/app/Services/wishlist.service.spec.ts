import { TestBed } from '@angular/core/testing';

import { WishlistService } from './wishlist.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('WishlistService', () => {
  let service: WishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ]
    });
    service = TestBed.inject(WishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
