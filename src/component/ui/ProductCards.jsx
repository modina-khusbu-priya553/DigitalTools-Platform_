import 'react';
import { useState } from 'react';

const ProductCards = ({product}) => {

    const [isBuy, setIsBuy] = useState(false)


    console.log(product)
    return (
        <div>
            <div className="card bg-base-100  p-6 border-4 border-[#F2F2F2] rounded-lg shadow-sm">
                    <div className="flex items-center justify-end">
                        <span className="badge badge-xs badge-warning font-medium py-1.5 px-3">{product.tagType}</span>
                    </div>
                    <div className="card-body">
                        <div className='w-fit p-3.5 border-2 border-[#F2F2F2] rounded-full'>
                            <img src={product.icon} alt='WritingTool'/>
                        </div>
                        <h2 className="card-title font-bold text-2xl">{product.name}</h2>
                        <p className='text-[#627382]'>{product.description}</p>

                        <span className="text-xl font-bold">{product.price}
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
                            <button className="btn btn-primary btn-block rounded-full font-bold">Buy Now</button>
                        </div>
                        
                    </div>
                </div>
            
        </div>
    );
};

export default ProductCards;