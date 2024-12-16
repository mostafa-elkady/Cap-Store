import { Component } from '@angular/core';
import { IStore } from '../../models/istore';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { HatSectionComponent } from "../hat-section/hat-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HatSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  myStore: IStore;

  constructor() {

    this.myStore = {
      name: 'Carrefour',
      imgUrl: 'https://boycottcampaign.com/wp-content/uploads/2024/01/download.png',
      branches: ['Cairo', 'Alex']
    }
  }
}
