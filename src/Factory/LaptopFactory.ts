import Product from '../Product/Interfaces/Product';
import Laptop from '../Product/Concretes/Laptop';

export default class LaptopFactory{
    createProduct(): Product {
        return new Laptop();
    };
}