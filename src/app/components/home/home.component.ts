import { Component } from '@angular/core';
import { IStore } from '../../models/istore';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { HatSectionComponent } from "../hat-section/hat-section.component";
import { ProductsComponent } from "../products/products.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HatSectionComponent, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  constructor() {


  }
}
