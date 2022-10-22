
import Product from '../Product/Interfaces/Product';
abstract class ProductFactory{
    abstract createProduct: () => Product;
}