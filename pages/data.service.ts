import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public orders: any[] = [];

  public products: any[] = [
    {
      name: "Item 1",
      price: 150,
    },
    {
      name: "Item 2",
      price: 150,
    },
    {
      name: "Item 3",
      price: 150,
    },
    {
      name: "Item 4",
      price: 150,
    },
    {
      name: "Item 5",
      price: 150,
    },
  ];

  public customers: any[] = [
    {
      firstname: "Customer",
      lastname: "A",
      email: "customera@email.com",
      phone: 123456789,
      address: "1 Customer Street"
    },
    {
      firstname: "Customer",
      lastname: "B",
      email: "customerb@email.com",
      phone: 123456789,
      address: "2 Customer Street"
    },
    {
      firstname: "Customer",
      lastname: "C",
      email: "customerc@email.com",
      phone: 123456789,
      address: "3 Customer Street"
    },
    {
      firstname: "Customer",
      lastname: "D",
      email: "customerd@email.com",
      phone: 123456789,
      address: "4 Customer Street"
    },
    {
      firstname: "Customer",
      lastname: "E",
      email: "customere@email.com",
      phone: 123456789,
      address: "5 Customer Street"
    },
  ];

}
