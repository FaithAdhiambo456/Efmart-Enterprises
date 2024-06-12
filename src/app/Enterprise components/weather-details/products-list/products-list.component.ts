import { Component } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  // listOfString = ['Mark', 'Steve', 'Mary', 'Naomi', 'Sarah'];
  products = [
    {
      id: 1,
      name: "White-Maize",
      description: "",
      price: 200,
      is_in_inventory: true,
      items_left: 7,
      imageURL: "/assets/images/M1.jpg"
    },
    {
      id: 2,
      name: "Yellow-Maize",
      description: "",
      price: 200,
      is_in_inventory: true,
      items_left: 7,
      imageURL: ""
    },
    {
      id: 3,
      name: "Beans",
      description: "",
      color: "various",
      price: 200,
      is_in_inventory: true,
      items_left: 7,
      imageURL: ""
    },
    {
      id: 4,
      name: "sorghum",
      description: "",
      color: "",
      price: 200,
      is_in_inventory: true,
      items_left: 7,
      imageURL: ""
    },
    {
      id: 5,
      name: "millet",
      description: "",
      color: "",
      price: 200,
      is_in_inventory: true,
      items_left: 7,
      imageURL: ""
    },
    {
      id: 6,
      name: "Rice",
      description: "",
      color: "",
      price: 300,
      is_in_inventory: true,
      items_left: 7,
      imageURL: ""
    }
  ]
}
