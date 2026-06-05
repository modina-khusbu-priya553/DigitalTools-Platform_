import 'react';

const cards = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className="card bg-base-100  p-6 border-4 border-[#F2F2F2] rounded-lg">
                    <div className="flex items-center justify-end">
                        <span className="badge badge-xs badge-warning font-medium py-1.5 px-3">Most Popular</span>
                    </div>
                    <div className="card-body">
                        <div className='w-fit p-3.5 border-2 border-[#F2F2F2] rounded-full'>
                            <img src='' alt='WritingTool'/>
                        </div>
                        <h2 className="card-title font-bold text-2xl">Card Title</h2>
                        <p className='text-[#627382]'>A card component has a figure, a body part, and inside body there are title and actions parts</p>

                        <span className="text-xl font-bold">$29<span className="text-sm text-[#627382]">/mo</span></span>

                        <ul className="mt-2 flex flex-col gap-2 text-sm font-medium text-[#627382]">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>High-resolution image generation</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Customizable style templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Batch processing capabilities</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>AI-driven image enhancements</span>
                            </li>  
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary btn-block rounded-full font-bold">Buy Now</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default cards;