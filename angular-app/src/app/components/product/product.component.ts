import { Component, Input } from '@angular/core';
import { IProduct } from '../../interfaces/product';
import { CharactersLimitPipe } from '../../pipes/characters-limit.pipe';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() productData!: IProduct;
}
