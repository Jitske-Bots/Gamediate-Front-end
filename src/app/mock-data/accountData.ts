import { Account } from "../Models/account";

export class AccountData {

    public getMockData() : Account[] {
        const Accounts : Account[] = [
            { id: 1, firstName: 'Jane', lastName: 'Doe', address: 'street', houseNumber: '13A',
              postalCode: '4321WS', city: 'Amsterdam', phoneNumber: 634567454, 
              email: 'janedoe@gmail.com', password: 'strongpassword' },
            { id: 2, firstName: 'John', lastName: 'Doe', address: 'street', houseNumber: '50',
              postalCode: '6745KJ', city: 'Rotterdam', phoneNumber: 693924310, 
              email: 'johndoe@gmail.com', password: 'password' },
            { id: 3, firstName: 'Harry', lastName: 'Janssen', address: 'somestreet', houseNumber: '65B',
              postalCode: '3242ER', city: 'Utrecht', phoneNumber: 654525786, 
              email: 'hjanssen@gmail.com', password: 'password1234' },
          ];
        return Accounts

    }

}