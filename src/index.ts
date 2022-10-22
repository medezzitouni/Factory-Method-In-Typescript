import PhoneFactory from './Factory/PhoneFactory';
import LaptopFactory from './Factory/LaptopFactory';

type Data = {
    brand: string;
}
// main
((productType: string, data: Data): number => {
    let productFactory, product; 

    if(productType == 'Phone'){
        productFactory = new PhoneFactory();
    }else if(productType == 'Laptop'){
        productFactory = new LaptopFactory();
    }

    product = productFactory?.createProduct();

    product?.setBrand(data.brand)
    product?.save();
    product?.remove(17);
    
    console.log('====================================');
    console.log(product);
    console.log('====================================');

    return 0; // C-language style 😜

})('Phone', { brand: 'Iphone'});