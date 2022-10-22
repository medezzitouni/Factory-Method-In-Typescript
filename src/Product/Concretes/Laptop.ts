import Product from '../Interfaces/Product';


export default class Laptop implements Product {
    constructor(public brand?: string){}

    save(): boolean{
        // persist into the Database
        return true
    }
    remove(productId: number): Product {
        // remove it from the Database
        return new Laptop('');
    }
    setBrand(brand: string){
        this.brand = brand;
    }
}