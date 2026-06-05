import 'react';
import ProductCards from '../../ui/ProductCards';



const AvailableProducts = ({products}) => {
    console.log(products);
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-6">
                {products.map((product) => {
                return(
                    <ProductCards product={product} key={product.id} />

                );
                
            })} 
            </div>    
        </div>
    );
};

export default AvailableProducts;