import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductsComponent {
  constructor(private dataService: DataService) {}

  async addCapProducts() {
    const products: Omit<IProduct, 'id'>[] = [
      {
        name: "Classic New York Yankees Cap",
        price: 34.99,
        subDescription: "Authentic MLB baseball cap with iconic NY logo",
        description: "Show your team spirit with this authentic New York Yankees baseball cap. Features the iconic NY logo embroidered on the front, adjustable strap for perfect fit, and moisture-wicking sweatband. Made from premium materials for lasting durability and comfort.",
        imageUrl: "https://example.com/ny-cap.jpg",
        category: "Baseball Caps",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Navy", "Black", "Gray"],
        inStock: true
      },
      {
        name: "Urban Streetwear Snapback",
        price: 29.99,
        subDescription: "Modern flat-brim snapback with urban design",
        description: "Make a statement with this contemporary snapback cap. Features a flat brim, bold urban design, and premium embroidery. The adjustable snapback closure ensures one size fits most. Perfect for streetwear enthusiasts and modern fashion lovers.",
        imageUrl: "https://example.com/urban-snapback.jpg",
        category: "Snapbacks",
        sizes: ["One Size"],
        colors: ["Black/Gold", "Red/Black", "Blue/White"],
        inStock: true
      },
      {
        name: "Vintage Denim Cap",
        price: 27.99,
        subDescription: "Distressed denim cap with worn-in look",
        description: "Embrace the vintage trend with this perfectly distressed denim cap. Each piece features unique washing and distressing patterns, making every cap one of a kind. Comfortable cotton sweatband and adjustable metal buckle closure.",
        imageUrl: "https://example.com/vintage-cap.jpg",
        category: "Fashion Caps",
        sizes: ["One Size"],
        colors: ["Light Denim", "Dark Denim", "Black Denim"],
        inStock: true
      },
      {
        name: "Premium Sports Performance Cap",
        price: 39.99,
        subDescription: "High-performance cap with moisture-wicking technology",
        description: "Engineered for athletes, this performance cap features advanced moisture-wicking technology, UV protection, and breathable mesh panels. Perfect for running, golf, tennis, or any outdoor activity. Lightweight construction with adjustable velcro strap.",
        imageUrl: "https://example.com/sports-cap.jpg",
        category: "Sports Caps",
        sizes: ["S/M", "L/XL"],
        colors: ["White", "Black", "Navy", "Gray"],
        inStock: true
      },
      {
        name: "Leather Patch Trucker Cap",
        price: 32.99,
        subDescription: "Classic trucker style with leather patch detail",
        description: "Combine style and comfort with this modern trucker cap. Features a premium leather patch on front, breathable mesh back panels, and snapback closure. Perfect for casual wear or outdoor adventures. Durable construction ensures long-lasting wear.",
        imageUrl: "https://example.com/trucker-cap.jpg",
        category: "Trucker Caps",
        sizes: ["One Size"],
        colors: ["Black/Tan", "Navy/White", "Gray/Black"],
        inStock: true
      },
      {
        name: "Minimalist Cotton Cap",
        price: 24.99,
        subDescription: "Clean and simple design in pure cotton",
        description: "Less is more with this minimalist cotton cap. Made from 100% premium cotton for ultimate comfort. Features a subtle embroidered logo, pre-curved bill, and adjustable strap. Perfect for everyday wear and casual occasions.",
        imageUrl: "https://example.com/cotton-cap.jpg",
        category: "Fashion Caps",
        sizes: ["One Size"],
        colors: ["Black", "White", "Beige", "Navy"],
        inStock: true
      },
      {
        name: "Camo Print Tactical Cap",
        price: 31.99,
        subDescription: "Military-inspired cap with camouflage pattern",
        description: "Built for durability and style, this tactical cap features authentic camouflage patterns and rugged construction. Includes velcro patches for customization, adjustable strap, and moisture-wicking sweatband. Perfect for outdoor activities.",
        imageUrl: "https://example.com/camo-cap.jpg",
        category: "Tactical Caps",
        sizes: ["S/M", "L/XL"],
        colors: ["Desert Camo", "Woodland Camo", "Urban Camo"],
        inStock: true
      },
      {
        name: "Retro Baseball Cap",
        price: 28.99,
        subDescription: "Classic style with retro team designs",
        description: "Step back in time with this retro-inspired baseball cap. Features vintage team logos and designs, wool-blend construction, and traditional styling. Includes leather strap adjustment and cotton sweatband for comfort.",
        imageUrl: "https://example.com/retro-cap.jpg",
        category: "Baseball Caps",
        sizes: ["S", "M", "L"],
        colors: ["Navy/White", "Red/White", "Green/Cream"],
        inStock: true
      },
      {
        name: "Premium Wool Fitted Cap",
        price: 44.99,
        subDescription: "High-quality wool blend fitted cap",
        description: "Experience premium comfort with this fitted wool cap. Made from high-quality wool blend material for durability and style. Features precise sizing for perfect fit, embroidered eyelets for ventilation, and premium sweatband.",
        imageUrl: "https://example.com/wool-cap.jpg",
        category: "Fitted Caps",
        sizes: ["6 7/8", "7", "7 1/4", "7 1/2"],
        colors: ["Black", "Navy", "Gray"],
        inStock: true
      },
      {
        name: "Summer Mesh Cap",
        price: 26.99,
        subDescription: "Lightweight cap with full mesh construction",
        description: "Stay cool in style with this lightweight mesh cap. Features full mesh construction for maximum breathability, structured front panels, and adjustable snapback closure. Perfect for hot weather and summer activities.",
        imageUrl: "https://example.com/mesh-cap.jpg",
        category: "Sports Caps",
        sizes: ["One Size"],
        colors: ["White/Black", "Black/Gray", "Navy/White"],
        inStock: true
      },
      {
        name: "Limited Edition Artist Cap",
        price: 49.99,
        subDescription: "Exclusive design collaboration with local artists",
        description: "Part of our exclusive artist series, this limited edition cap features unique artwork from local designers. Each cap is numbered and includes a certificate of authenticity. Premium construction with special edition packaging.",
        imageUrl: "https://example.com/artist-cap.jpg",
        category: "Limited Edition",
        sizes: ["One Size"],
        colors: ["Multi-color"],
        inStock: true
      },
      {
        name: "Kids' Fun Cap",
        price: 19.99,
        subDescription: "Playful designs perfect for young cap enthusiasts",
        description: "Designed specifically for kids, this fun cap features playful designs and bright colors. Includes safety buckle closure, lightweight construction, and UPF 50+ sun protection. Adjustable strap ensures room for growth.",
        imageUrl: "https://example.com/kids-cap.jpg",
        category: "Kids Caps",
        sizes: ["Kids", "Youth"],
        colors: ["Blue/Orange", "Red/Yellow", "Green/Purple"],
        inStock: true
      }
    ];

    try {
      await this.dataService.addProducts(products);
      console.log('Cap products added successfully');
    } catch (error) {
      console.error('Error adding cap products:', error);
    }
  }
}