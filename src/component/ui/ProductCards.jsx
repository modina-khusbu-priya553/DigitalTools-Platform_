import 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';


const ProductCards = ({product, selectedProducts, setSelectedProducts}) => {

    const [isBuy, setIsBuy] = useState(false)

    const handleChooseProducts = () => {
        setIsBuy(!isBuy);

        setSelectedProducts ([...selectedProducts, product]);
        toast.success("Product is add to cart");

    }
    const getBadgeClass = (tag) => {
    if (tag === "Best Seller") return "bg-[#FFF3D6] text-[#B45309]";
    if (tag === "Popular") return "bg-[#EDE9FF] text-[#6D28D9]";
    if (tag === "New") return "bg-[#DCFCE7] text-[#15803D]";
    return "";
    }
    


    return (
        <div className="h-full">
            <div className="card bg-base-100 p-3 border-4 border-[#F2F2F2] rounded-lg shadow-sm h-full">
                    <div className="flex items-center justify-end">
                        <span className={`badge font-bold py-2git px-3 ${getBadgeClass(product.tag)}`}>{product.tag}</span>
                    </div>
                    <div className="card-body">
                        <div className='w-fit p-3.5 border-2 border-[#F2F2F2] rounded-full'>
                            <img src={product.icon} alt='WritingTool'/>
                        </div>
                        <h2 className="card-title font-bold md:text-2xl text-xl">{product.name}</h2>
                        <p className='text-[#627382]'>{product.description}</p>

                        <span className="md:text-xl text-lg font-bold">${product.price}
                            <span className="text-sm text-[#627382]">/{product.period}</span></span>

                        <ul className="mt-2 flex flex-col gap-2 text-sm font-medium text-[#627382]">
                            {
                                product.features.map((features, index) => {
                                    return (
                                        <li key={index}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 
                                        inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>{features}</span>
                                    </li>
                                    );
                                })
                            }    
                        </ul>
                        <div className="mt-6">
                            <button onClick={handleChooseProducts} 
                                className={`btn btn-block rounded-full font-bold text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg
                                ${isBuy ? "bg-green-600" : "bg-linear-65 from-[#4F39F6] to-[#9514FA]"}`}>
                                {isBuy ? "Add to Cart!" : "Buy Now"}
                                
                            </button>
                        </div>
                        
                    </div>
                </div>
            
        </div>
    );
};

export default ProductCards;