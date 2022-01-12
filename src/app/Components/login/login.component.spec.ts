import "jasmine";

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
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
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should be able to login', () =>{
    component.signIn = { 
      id: 1, firstName: 'Jane', lastName: 'Doe', address: 'street', houseNumber: '13A',
      postalCode: '4321WS', city: 'Amsterdam', phoneNumber: 634567454, 
      email: 'janedoe@gmail.com', password: 'strongpassword'
    };
    component.loginClickTest(component.signIn);
    expect(component.canLogin).toBe(true);
  });
  
  it('should NOT be able to login', () =>{
    component.signIn = { 
      id: 1, firstName: 'Jane', lastName: 'Doe', address: 'street', houseNumber: '13A',
      postalCode: '4321WS', city: 'Amsterdam', phoneNumber: 634567454, 
      email: 'janed@gmil.com', password: 'strongpassword'
    };
    component.loginClickTest(component.signIn);
    expect(component.canLogin).toBeFalsy();
  });

});
