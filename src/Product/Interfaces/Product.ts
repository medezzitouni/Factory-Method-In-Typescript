
export default interface Product{
    save: () => boolean
    remove: (productId: number) => Product;
    setBrand: (brand: string) => void;
}