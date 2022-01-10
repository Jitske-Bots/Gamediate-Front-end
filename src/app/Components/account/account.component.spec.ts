import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from './account.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Account } from '../../Models/account';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountComponent ],
      imports : [
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should edit account', () => {
    component.account = { 
      id: 1, firstName: 'Jane', lastName: 'Doe', address: 'street', houseNumber: '13A',
      postalCode: '4321WS', city: 'Amsterdam', phoneNumber: 634567454, 
      email: 'janedoe@gmail.com', password: 'strongpassword'
    };
    let edit: Account = {
      id: 1, firstName: '', lastName: '', address: 'someStreet', houseNumber: '10', 
      postalCode: '3452RT', city: '', phoneNumber: 636562411, email: 'janeDoe@gmail.com',
      password: 'strongpassword'
    }
    component.btnEditTest(edit);
    expect(component.editedAccount.address).toBe('someStreet');
    expect(component.editedAccount.firstName).toBe('Jane');
  });

});
