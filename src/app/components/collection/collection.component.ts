import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/iproduct';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, catchError, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent implements OnInit {
  products$: Observable<IProduct[]> = new Observable<IProduct[]>();
  loading$ = new BehaviorSubject<boolean>(true);
  error$ = new BehaviorSubject<string | null>(null);
  selectedImage: string | null = null;

  ngOnInit() {
    this.loadProducts();
    
  }

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

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
  onQuickView(productId: string | undefined) {
    if (productId) {
      this.router.navigate(['/product', productId]);
    }
  }
  addToWishlist(productId: string | undefined) {
    if (productId) {
      console.log("Product added sucessfully");
      
    }
  }
}
