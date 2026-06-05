import 'react';
import { use } from 'react';
import AvailableProducts from './availabelProducts/AvailableProducts';

const DigitalTools = ({productsPromise}) => {
    const products = use(productsPromise)
    console.log(products);

    return (
        <div>
            <div className='container mx-auto py-28 text-center space-y-4'>
                <h2 className='font-extrabold text-5xl text-[#101727]'>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed 
                    <br /> to boost your productivity and creativity.</p>

                <div>
                    <button className="btn btn-xs sm:btn-sm md:btn-md rounded-l-full font-bold text-white 
                            bg-linear-65 from-[#4F39F6] to-[#9514FA]">Products</button>
                    <button className="btn btn-ghost btn-xs sm:btn-sm md:btn-md rounded-r-full font-bold text-[#25065D]">Cart(2)</button>
                </div>

            </div>

            <AvailableProducts products = {products} />
            
        </div>
    );
};

export default DigitalTools;