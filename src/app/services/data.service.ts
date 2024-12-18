import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where
} from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private firestore: Firestore = inject(Firestore);

  private productsSubject = new BehaviorSubject<IProduct[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor() {
    this.loadProducts();
  }

  private loadProducts() {
    const productsRef = collection(this.firestore, 'products');
    collectionData(productsRef, { idField: 'id' })
      .subscribe({
        next: (products) => {
          this.productsSubject.next(products as IProduct[]);
        },
        error: (error) => {
          console.error('Error loading products:', error);
        }
      });
  }

  getProducts(): Observable<IProduct[]> {
    const productsRef = collection(this.firestore, 'products');
    return collectionData(productsRef, { idField: 'id' }) as Observable<IProduct[]>;
  }

  async addProducts(products: Omit<IProduct, 'id'>[]) {
    try {
      const productsRef = collection(this.firestore, 'products');
      const promises = products.map(product => addDoc(productsRef, product));
      return await Promise.all(promises);
    } catch (error) {
      console.error('Error adding products:', error);
      throw error;
    }
  }

  async updateProduct(id: string, data: Partial<IProduct>) {
    try {
      const productRef = doc(this.firestore, `products/${id}`);
      return await updateDoc(productRef, data);
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  }

  async deleteProduct(id: string) {
    try {
      const productRef = doc(this.firestore, `products/${id}`);
      return await deleteDoc(productRef);
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  }

  getProductsByCategory(category: string): Observable<IProduct[]> {
    const productsRef = collection(this.firestore, 'products');
    const q = query(productsRef, where('category', '==', category));
    return collectionData(q, { idField: 'id' }) as Observable<IProduct[]>;
  }

  getProductById(id: string): Observable<IProduct> {
    const productRef = doc(this.firestore, `products/${id}`);
    return docData(productRef) as Observable<IProduct>;
    // return this.http.get<IProduct>(`${this.apiUrl}/products/${id}`);

  }
}