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
      name: "Maize",
      description: "",
      price: 200,
      color: "White",
      is_in_inventory: true,
      items_left: 7,
      imageURL: "/assets/images/M1.jpg",
      slug: "qwer2345y"
    },
    {
      id: 2,
      name: "Maize",
      description: "qwertyu",
      price: 150,
      color: "Yellow",
      is_in_inventory: true,
      items_left: 7,
      imageURL: "/assets/images/M2.jpg",
       slug: "qwer2345yt"
    },
    {
      id: 3,
      name: "Beans",
      description: "qwert",
      color: "Variety",
      price: 400,
      is_in_inventory: true,
      items_left: 7,
      imageURL: "/assets/images/Beans3.jpg",
       slug: "qwer2345ytre"
    },
    {
      id: 4,
      name: "Sorghum",
      description: "qwer",
      color: "Variety",
      price: 700,
      is_in_inventory: true,
      items_left: 7,
      imageURL: "/assets/images/SO4.jpg",
       slug: "qwer2345ytre"
    },
    {
      id: 5,
      name: "millet",
      description: "qwerty",
      color: "",
      price: 900,
      is_in_inventory: true,
      items_left: 7,
      imageURL: "/assets/images/Millet5.jpg",
       slug: "qwer2345ytre"
    },
    {
      id: 6,
      name: "Rice",
      description: "poiuytrewq",
      color: "",
      price: 300,
      is_in_inventory: true,
      items_left: 7,
      imageURL: "/assets/images/Rice6.jpg",
       slug: "qwer2345ytre",
       Discounted_price: ""
    },
    {
      id: 7,
      name: "Other grains",
      description: "Groundnuts, Peanuts, Soya",
      color: "Variety",
      price: 250,
      is_in_inventory: true,
      items_left: 7,
      imageURL: "/assets/images/grains.jpg",
       slug: "qwer2345ytre"
    }
  ]
}
