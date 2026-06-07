import 'react';
import { use} from 'react';
import AvailableProducts from './availableProducts/AvailableProducts';
import SelectedProducts from './selectedProducts/SelectedProducts';

const DigitalTools = ({productsPromise,selectedType, setSelectedType, selectedProducts,setSelectedProducts}) => {
    const products = use(productsPromise)

    

    return (
        <div>
            <div className='container mx-auto xl:py-28 text-center space-y-4 py-6 px-6 md:mt-8 lg:py-16'>
                <h2 className='font-extrabold md:text-5xl text-[#101727]'>Premium Digital Tools</h2>
                <p className='text-[#627382] text-xs md:text-sm'>Choose from our curated collection of premium digital products designed 
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