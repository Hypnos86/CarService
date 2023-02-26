import { Component, OnInit } from '@angular/core';
import { CarsLocalStorageService } from '../cars-local-storage.service';
import { Car } from 'src/models/modelCar';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit{

  cars!: Car[];

  constructor(private carLocalStorage : CarsLocalStorageService){}

  ngOnInit(): void {
      this.cars = this.carLocalStorage.getCars()
  }

  saveCars(): void{
    this.carLocalStorage.setCars(this.cars);
  }

}
