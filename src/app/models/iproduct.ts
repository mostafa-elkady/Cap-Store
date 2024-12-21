import { ICategory } from "./icategory";

export interface IProduct {
    id: string;
    name: string;
    price: number;
    subDescription: string;
    description: string;
    imageUrl: string;
    galleryImages: string[]; 
    category:ICategory;
    sizes?: string[];
    colors?: string[];
    inStock: boolean;
}
