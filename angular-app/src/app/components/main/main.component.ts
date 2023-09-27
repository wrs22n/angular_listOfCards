import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { IProduct } from '../../interfaces/product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private productService: ProductService) {}

  mainProduct$ = this.productService.getMainProduct();
  products: IProduct[] = [];

  ngOnInit() {
    this.productService.getOtherProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
