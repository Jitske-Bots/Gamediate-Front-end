import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AccountData} from '../../mock-data/accountData'
import { expect } from '@jest/globals';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      declarations: [ SignupComponent ],
      imports : [
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule, 
        ReactiveFormsModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add new account', () => {
    const data: AccountData = new AccountData();
    component.mockData = data.getMockData();
    component.newAccount = { 
      id: 4, firstName: 'Anne', lastName: 'De Vries', address: 'somewhere', houseNumber: '33A',
      postalCode: '3476GT', city: 'Rotterdam', phoneNumber: 678721043, 
      email: 'Anne@gmail.com', password: 'password1234' 
    };
    component.mockData.push(component.newAccount);
    expect(component.mockData.length).toBe(4);
  });
   

});
