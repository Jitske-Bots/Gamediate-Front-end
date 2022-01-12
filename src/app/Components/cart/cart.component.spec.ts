import "jasmine";

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {OrderData} from '../../mock-data/orderData'
import {OrderItemsData} from '../../mock-data/orderItemsData'
import {GameData} from '../../mock-data/gameData'

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
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
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new order', () => {
    const data: OrderData = new OrderData();
    const itemsData: OrderItemsData = new OrderItemsData();
    component.Orders = data.getMockData();
    component.account = { 
      id: 1, firstName: 'Jane', lastName: 'Doe', address: 'street', houseNumber: '13A',
      postalCode: '4321WS', city: 'Amsterdam', phoneNumber: 634567454, 
      email: 'janedoe@gmail.com', password: 'strongpassword'
    };
    component.addOrderTest(itemsData.getMockData(), 60.99)
    expect(component.Orders.length).toBe(3);
  });

  it('should calculate total amount', () => {
    const games: GameData = new GameData();
    component.totalAmount = component.GetTotalAmount(games.getMockData())
    expect(component.totalAmount).toBe(114.97);
  })
});
