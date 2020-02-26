import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styles: []
})
export class PageOneComponent implements OnInit {

  constructor(private dService: DataService) { }

  ngOnInit() {
    this.inv_a = null; 
    this.getProducts();
  }

  inv_a: any; boxes: any;
  selectedInv: any; selectedRoseboxName: any; selectedRoseboxColor: any;

  upperTableHeaders = [
    "New Item Name",
    "New Price",
  ];

  lowerTableHeaders = [
    "Item Name",
    "Price",
    "Option",
    "Option",
  ];

  public products: any[];

  getProducts() {
    this.products = this.dService.products;
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

  addItem(name, price){
    let item = {
      name: name,
      price: price,
    }
    if (confirm(`Are you sure you wish to add ${name}?`)) {
      this.products.push(item);
    }
  }

  editItem(name, price, index){
    let item = {
      name: name,
      price: price,
    }
    if (confirm(`Are you sure you wish to change to ${name}?`)) {
      this.products[index] = item;
      console.log(this.products);
    }
  }

  removeItem(index): void {
    if (confirm(`Are you sure you wish to delete ${this.products[index].name}?`)) {
    this.products.splice(index,1);
    }
  }

  

}