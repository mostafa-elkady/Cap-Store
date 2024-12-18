export interface IProduct {
    id?: string;
    name: string;
    price: number;
    subDescription: string;
    description: string;
    imageUrl: string;
    category: string;
    sizes?: string[];
    colors?: string[];
    inStock: boolean;
}
