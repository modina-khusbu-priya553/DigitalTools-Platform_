import 'react';
import { LinearGradient } from 'react-text-gradients'
import { FaRegCircleDot } from "react-icons/fa6";
import PlayImg from "../../assets/Play.png"
import bannerImg from "../../assets/products/banner.png"


const Banner = () => {
    return (
        <div>
            <div className="container mx-auto flex items-center justify-between gap-10 px-6">
                {/* left-container */}
                <div className='mt-28 space-y-6'>
                    <div className="py-2 px-4 bg-[#E1E7FF] rounded-full w-fit font-bold flex items-center justify-center gap-1">
                        <FaRegCircleDot className="text-[#4F39F6]"/>                    
                        <LinearGradient gradient={['to left', '#9514FA ,#4F39F6']}>
                            <span>New: AI-Powered Tools Available</span>
                        </LinearGradient>
                    </div>
                    <h2 className="text-7xl font-extrabold text-[#101727]/90">Supercharge Your <br /> Digital Workflow</h2>
                    <p className="= text-[#627382] text-xl mb-6">Access premium AI tools, design assets, templates, and productivity <br /> 
                        software—all in one place. Start creating faster today.<br /> 
                        Explore Products
                    </p>

                    <div className='flex items-center gap-2'>
                        <a className="btn btn-xs sm:btn-sm md:btn-md rounded-full font-bold text-white 
                            bg-linear-65 from-[#4F39F6] from-60% to-[#9514FA] via-40%">Get Started
                        </a>
                        <a className="btn btn-outline btn-primary btn-xs sm:btn-sm md:btn-md rounded-full font-bold">
                            <img src={ PlayImg} alt="play_img" className='w-4'/>
                            Watch Demo
                        </a>    
                    </div>
                </div>
                
                {/* right-container */}
                <div className='mt-24'>
                    <img src={bannerImg} alt='bannerImg'/>


                </div>

            </div>
            
        </div>
    );
};

export default Banner;