import 'react';
import { FiShoppingCart } from "react-icons/fi";

const SelectedProducts = ({selectedProducts, setSelectedProducts}) => {
    console.log(selectedProducts)
    return (
        <div>
            <div className='container mx-auto'>
                <div className="flex flex-col items-center justify-center h-64 space-y-2 shadow-sm border-3 border-[#F2F2F2] rounded-lg">
                    <h2 className="text-2xl font-bold text-center text-gray-500"><FiShoppingCart size={50}/></h2>
                    <p className="text-center text-gray-500 text-2xl">Your cart is empty</p>
                </div>               
           </div>
            
        </div>
    );
};

export default SelectedProducts;