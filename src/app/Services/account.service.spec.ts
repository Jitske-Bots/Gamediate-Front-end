import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Account } from '../Models/account';
import { throwError } from 'rxjs';


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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe("alert error reporting", function () {    
    beforeEach(function(){
      spyOn(window, 'alert');
    });
    it('should show windows alert message', function(){
      const account : Account = {} as Account;
      account.firstName = "John";
      account.lastName = "Doe";
      account.city = "Amsterdam";
      service.signUp(account);
      expect(window.alert).toHaveBeenCalledWith('Not all fields are filled in!');
    })
  });

});
