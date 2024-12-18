import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { IProduct } from '../../models/iproduct';
import { Observable, switchMap } from 'rxjs';
@Component({
    selector: 'app-product-details',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

    product$: Observable<IProduct> = new Observable<IProduct>();

    constructor(
        private route: ActivatedRoute,
        private dataService: DataService
    ) { }

    ngOnInit() {
        this.product$ = this.route.params.pipe(
            switchMap(params => this.dataService.getProductById(params['id']))
        );
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
            'Beige': '#F5F5DC'
        };

        return colorMap[colorName] || '#999999';
    }
}
