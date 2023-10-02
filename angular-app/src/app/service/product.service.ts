import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { data } from '../../assets/data';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  public getMainProduct(): Observable<IProduct> {
    const mainData = data.find((item) => item.main);
    return of(mainData);
  }

  public getOtherProducts(): Observable<IProduct[]> {
    const otherData = data.filter((item) => !item.main);
    return of(otherData);
  }
}
