import 'react';
import { FiShoppingCart } from "react-icons/fi";

const EmptyCard = () => {
    return (
        <div>
            <div className='container mx-auto flex flex-col h-64 space-y-2 shadow-sm border-3 border-[#F2F2F2] rounded-lg p-10'>
                <h2 className='font-bold text-2xl'>Your cart</h2>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold text-center text-gray-500"><FiShoppingCart size={50}/></h2>
                    <p className="text-center text-gray-500 text-2xl">Your cart is empty</p>
                </div>               
            </div>
            
        </div>
    );
};

export default EmptyCard;