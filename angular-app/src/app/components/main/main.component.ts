import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { IProduct } from '../../interfaces/product.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductService) {}

  dataSubscription: Subscription;

  mainProduct$: Observable<IProduct>;
  products: IProduct[] = [];

  ngOnInit() {
    this.mainProduct$ = this.productService.getMainProduct();

    this.dataSubscription = this.productService
      .getOtherProducts()
      .subscribe((data) => {
        this.products = data;
      });
  }

  ngOnDestroy(): void {
    this.dataSubscription?.unsubscribe();
  }
}
