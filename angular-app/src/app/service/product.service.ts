import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { data } from '../../assets/data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  public getMainProduct() {
    return of(data[0]);
  }

  public getOtherProducts() {
    return of(data.slice(1));
  }
}
