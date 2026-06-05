import 'react';
import { use, useState } from 'react';
import AvailableProducts from './availableProducts/AvailableProducts';
import SelectedProducts from './selectedProducts/SelectedProducts';

const DigitalTools = ({productsPromise}) => {
    const products = use(productsPromise)

    const [selectedType, setSelectedType] = useState("products");
    const [selectedProducts, setSelectedProducts] = useState([])
    

    return (
        <div>
            <div className='container mx-auto py-28 text-center space-y-4'>
                <h2 className='font-extrabold text-5xl text-[#101727]'>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed 
                    <br /> to boost your productivity and creativity.</p>

                <div>
                    <button onClick={() => setSelectedType("products")} 
                        className={`btn btn-xs sm:btn-sm md:btn-md rounded-l-full font-bold
                            ${selectedType === "products" ? "bg-linear-65 from-[#4F39F6] to-[#9514FA] text-white": "text-[#25065D]"} `}>Products</button>
                    <button onClick={() => setSelectedType("carts")}  className={`btn btn-xs sm:btn-sm md:btn-md rounded-r-full font-bold 
                            ${selectedType === "carts" ? "bg-linear-65 from-[#4F39F6] to-[#9514FA] text-white": "text-[#25065D]"} `}>
                                Cart({selectedProducts.length})</button>
                </div>

            </div>

            {selectedType === "products"? 
                <AvailableProducts 
                    products = {products} 
                    selectedProducts={selectedProducts} 
                    setSelectedProducts={setSelectedProducts} 
                    /> :
                <SelectedProducts 
                    selectedProducts={selectedProducts} 
                    setSelectedProducts={setSelectedProducts} 
                    />
            }

            
            
            
        </div>
    );
};

export default DigitalTools;