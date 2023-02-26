import { Injectable } from '@angular/core';
import { Car } from 'src/models/modelCar';

@Injectable({
  providedIn: 'root'
})
export class CarsLocalStorageService {
  
  private readonly STORAGE_KEY = 'cars';

  constructor() { }

  getCars(): any[] {
    const cars = localStorage.getItem(this.STORAGE_KEY);
    return cars ? JSON.parse(cars) : [];
  }

  setCars(cars: any[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cars));
  }
}
