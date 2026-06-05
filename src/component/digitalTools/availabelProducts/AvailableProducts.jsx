import 'react';



const AvailableProducts = ({products}) => {
    console.log(products)
    return (
        <div>

            {products.map((product) => {
                console.log(product);
            } )}

            
            
            
        </div>
    );
};

export default AvailableProducts;