import Product from '../Product/Interfaces/Product';
import Phone from '../Product/Concretes/Phone';

export default class PhoneFactory{
    createProduct(): Product {
        return new Phone();
    };
}