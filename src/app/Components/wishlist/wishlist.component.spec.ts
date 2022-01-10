import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistComponent } from './wishlist.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {WishlistData} from '../../mock-data/wishlistData'
import {GameData} from '../../mock-data/gameData'
import { expect } from '@jest/globals';

describe('WishlistComponent', () => {
  let component: WishlistComponent;
  let fixture: ComponentFixture<WishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistComponent ],
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
    fixture = TestBed.createComponent(WishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get correct wishlist items', () => {
    const data: WishlistData = new WishlistData();
    const gameData: GameData = new GameData();
    component.games = gameData.getMockData();
    component.wishlist = data.getMockData();
    component.account = { 
      id: 1, firstName: 'Jane', lastName: 'Doe', address: 'street', houseNumber: '13A',
      postalCode: '4321WS', city: 'Amsterdam', phoneNumber: 634567454, 
      email: 'janedoe@gmail.com', password: 'strongpassword'
    };
    component.addGamesToList();
    expect(component.wishlistGames.length).toBe(2);
  })
  it('should remove item from wishlist', () => {
    const data: WishlistData = new WishlistData();
    component.wishlist = data.getMockData();
    component.removeItemTest(2);
    expect(component.wishlist.length).toBe(1);
  })

});
