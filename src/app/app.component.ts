import { Component, OnInit } from '@angular/core';
import { CarsLocalStorageService } from './cars-local-storage.service';
import { Car } from 'src/models/modelCar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'carService'
  header = 'Lista samochodów';
  
  cars = [  
    {    "id": 1,    "make": "Toyota",    "model": "Corolla",    "year": 2018,    "inspection_due": "2022-05-31"  },
    {    "id": 2,    "make": "Honda",    "model": "Civic",    "year": 2019,    "inspection_due": "2023-01-15"  },
    {    "id": 3,    "make": "Ford",    "model": "F-150",    "year": 2020,    "inspection_due": "2024-02-28"  },
    {    "id": 4,    "make": "Chevrolet",    "model": "Silverado",    "year": 2021,    "inspection_due": "2025-08-10"  },
    {    "id": 5,    "make": "Nissan",    "model": "Altima",    "year": 2017,    "inspection_due": "2021-12-01"  },
    {    "id": 6,    "make": "BMW",    "model": "X5",    "year": 2016,    "inspection_due": "2022-06-30"  },
    {    "id": 7,    "make": "Mercedes-Benz",    "model": "C-Class",    "year": 2015,    "inspection_due": "2023-03-20"  },
    {    "id": 8,    "make": "Audi",    "model": "A4",    "year": 2022,    "inspection_due": "2026-09-05"  },
    {    "id": 9,    "make": "Jeep",    "model": "Wrangler",    "year": 2019,    "inspection_due": "2023-11-30"  },
    {    "id": 10,    "make": "Tesla",    "model": "Model S",    "year": 2020,    "inspection_due": "2024-07-12"  }
  ];


  constructor(private carService: CarsLocalStorageService) { }

  initialize(): void {
    // this.carService.setCars(this.cars);
    localStorage.setItem("cars", JSON.stringify(this.cars))
    console.log("zainicjowano local storage")
  }

  carsFromStorage!: Car[];

  ngOnInit() {
    this.carsFromStorage = this.carService.getCars();
  }

}
