import 'react';
import { toast } from 'react-toastify';

const SelectedCards = ({selectedProducts, setSelectedProducts}) => {

    const totalPrice = () => {
        let total = 0;
        selectedProducts.forEach(productPrice => total += productPrice.price);
        return total;

    }

    

    const handleProductRemove = (product) => {

        const filterProduct = selectedProducts.filter((selectedProduct) => selectedProduct.name !== product.name);
        setSelectedProducts(filterProduct);
        toast.info("Product remove from cart");

    }

    const handleReset = () => {
        setSelectedProducts ([]);
        toast.success("Proceed to checkout");
    }


    return (
        <div>
            <div className='grid grid-cols-1 p-10 rounded-lg shadow-sm border-2 border-[#F2F2F2] gap-4 container mx-auto'>
                <h2 className='font-bold md:text-2xl text-xl'>Your cart</h2>
            {selectedProducts.map((product,index) => {
                return(<div key ={index}>
                    <div className="flex items-center gap-4 bg-[#F9FAFC] justify-between p-5 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-6">
                        <div className='w-fit p-3.5 border-2 border-[#F2F2F2] rounded-full bg-white'><img src={product.icon} alt=" "/></div>
                    <div>
                        <h2 className="md:text-xl font-bold flex items-center gap-2">{product.name}</h2>
                        <p className="text-gray-600">${product.price}</p>
                    </div>
                </div>
                    <button onClick = {()=> {handleProductRemove(product)}} className="btn text-red-500 hover:text-red-700">remove</button>
  
                </div>
                </div>
                )
            })}


            <div className='flex items-center justify-between'>
                <p className="text-gray-600">Total: </p>
                <h2 className='font-bold md:text-2xl'>${totalPrice()}</h2>
            </div>

            <button onClick ={handleReset} className='btn bg-linear-65 from-[#4F39F6] to-[#9514FA] 
                 text-white font-bold rounded-full py-4'>Proceed To Checkout</button>
            
            </div>
                
        </div>
        
    );


};



export default SelectedCards;