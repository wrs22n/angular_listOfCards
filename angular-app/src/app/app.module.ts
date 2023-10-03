import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './service/product.service';
import { CharactersLimitPipe } from './pipes/characters-limit.pipe';

@NgModule({
  declarations: [AppComponent, MainComponent, ProductComponent, CharactersLimitPipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
