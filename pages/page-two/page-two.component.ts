import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styles: []
})
export class PageTwoComponent implements OnInit {

  constructor(private dService: DataService) { }

  ngOnInit() {
    this.inv_a = null; 
    this.getCustomers();
  }

  inv_a: any; boxes: any;
  selectedInv: any; selectedRoseboxName: any; selectedRoseboxColor: any;

  upperTableHeaders = [
    "New First Name",
    "New Last Name",
    "New Email",
    "New Phone Number",
    "New Address",
    "Option"
  ];

  lowerTableHeaders = [
    "First Name",
    "Last Name",
    "Email",
    "Phone Number",
    "Address",
    "Option",
    "Option",
  ];

  public customers: any[];

  getCustomers() {
    this.customers = this.dService.customers;
  }

  selectRosebox(roseboxName) {
    console.log(roseboxName);
    // console.log(rosebox.name);
    this.selectedRoseboxName = null;
    this.selectedRoseboxName = roseboxName;
    // this.selectedRoseboxColor = rosebox.color;
  }

  getInventory(selectedInv) {
    this.selectedInv = selectedInv;
    // this.dService.getInventory(selectedInv);
  }

  addCustomer(firstname, lastname, email, phone, address){
    let item = {
      firtname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      address: address,
    }
    
    if (confirm(`Are you sure you wish to add ${firstname} ${lastname}?`)) {
      this.customers.push(item);
    }
  }

  editCustomer(name, price, index){
    let item = {
      name: name,
      price: price,
    }
    if (confirm(`Are you sure you wish to change to ${name}?`)) {
      this.customers[index] = item;
      console.log(this.customers);
    }
  }

  removeCustomer(index): void {
    if (confirm(`Are you sure you wish to delete ${this.customers[index].firstname} ${this.customers[index].lastname}?`)) {
    this.customers.splice(index,1);
    }
  }

}
