import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { IProduct } from '../../models/iproduct';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError, startWith } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {
  products$: Observable<IProduct[]> = new Observable<IProduct[]>();
  loading$ = new BehaviorSubject<boolean>(true);
  error$ = new BehaviorSubject<string | null>(null);

  ngOnInit() {
    this.loadProducts();
  }

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  loadProducts() {
    this.loading$.next(true);
    this.error$.next(null);

    this.products$ = this.dataService.getProducts().pipe(
      map((products) => {
        this.loading$.next(false);
        return products;
      }),
      catchError(error => {
        console.error('Error loading products:', error);
        this.loading$.next(false);
        this.error$.next('Failed to load products. Please try again.');
        return of([]);
      }),
      startWith([])
    );
  }

  retryLoading() {
    this.loadProducts();
  }

  getColorCode(colorName: string): string {
    const colorMap: { [key: string]: string } = {
      'Black': '#2d3436',
      'White': '#ffffff',
      'Navy': '#2c3e50',
      'Red': '#e74c3c',
      'Blue': '#3498db',
      'Gray': '#95a5a6',
      'Green': '#27ae60',
      'Purple': '#9b59b6',
      'Orange': '#e67e22',
      'Yellow': '#f1c40f',
      'Pink': '#e84393',
      'Brown': '#795548',
      'Tan': '#D2B48C',
      'Beige': '#F5F5DC',
      // Add more color mappings as needed
    };

    // Handle compound colors (e.g., "Navy/White")
    if (colorName.includes('/')) {
      return colorMap[colorName.split('/')[0]] || '#999999';
    }

    return colorMap[colorName] || '#999999';
  }

  onQuickView(productId: string | undefined) {
    if (productId) {
      this.router.navigate(['/product', productId]);
    }
  }
}


