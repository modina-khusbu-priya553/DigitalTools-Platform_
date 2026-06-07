import 'react';
import ProductCards from '../../ui/ProductCards';



const AvailableProducts = ({products, selectedProducts, setSelectedProducts}) => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {products.map((product) => {
                return(
                    <ProductCards 
                        product={product} 
                        key={product.id}
                        selectedProducts = {selectedProducts} 
                        setSelectedProducts = {setSelectedProducts}
                        />

                );
                
            })} 
            </div>    
        </div>
    );
};

export default AvailableProducts;