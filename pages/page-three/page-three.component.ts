import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styles: []
})
export class PageThreeComponent implements OnInit {

  constructor(public dService: DataService) { }

  ngOnInit() {
    this.getProducts();
    this.getCustomers();
  }

  public products: any[]; public customers: any[];
  selectedProduct: any; selectedCustomer: any;

  upperTableHeaders = [
    "Customer",
    "Product",
    "Option",
  ];

  lowerTableHeaders = [
    "Customer",
    "Product",
    "Fulfilled",
  ];

  getProducts() {
    this.products = this.dService.products;
  }
  getCustomers() {
    this.customers = this.dService.customers;
  }

  selectCustomer(name) {
    this.selectedCustomer = null;
    this.selectedCustomer = `${name}`;
  }

  selectProduct(product) {
    this.selectedProduct = null;
    this.selectedProduct = product;
  }

  addOrder(){
    console.log(this.selectedCustomer, this.selectedProduct);
    let order = {
      customer: `${this.selectedCustomer}`,
      product: this.selectedProduct,
    }
    
    if (confirm(`Are you sure you wish to add order?`)) {
      this.dService.orders.push(order);
    }
  }

}
