import 'react';

import SelectedCards from '../../ui/SelectedCards';
import EmptyCard from '../../ui/EmptyCard';

const SelectedProducts = ({selectedProducts, setSelectedProducts}) => {
    console.log(selectedProducts)
    return (
        <div>
            {selectedProducts.length === 0 ? <EmptyCard /> : 
            <SelectedCards 
                selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} />}    
        </div>
    );
};

export default SelectedProducts;