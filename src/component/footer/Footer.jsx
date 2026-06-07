import 'react';
import { TbBrandInstagramFilled} from "react-icons/tb";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div>
            <div className="bg-[#101727] px-10">
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8  text-white pt-6 md:py-20 footer sm:footer-horizontal'>

                    <div className="space-y-2">
                        <h2 className='md:text-2xl text-xl'>DigiTools</h2>
                        <p className='text-xs md:text-sm font-extralight'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>

                    
                    <div className='space-y-2'>
                        <h3 className='font-medium text-[20px]'>Product</h3>
                        <p className='text-xs md:text-sm font-extralight'>Features</p>
                        <p className='text-xs md:text-sm font-extralight'>Pricing</p>
                        <p className='text-xs md:text-sm font-extralight'>Templates</p>
                        <p className='text-xs md:text-sm font-extralight'>Integrations</p>
                    </div>

                    <div className='space-y-2'>
                        <h3 className='font-medium text-[20px]'>Company</h3>
                        <p className='text-xs md:text-sm font-extralight'>About</p>
                        <p className='text-xs md:text-sm font-extralight'>Blog</p>
                        <p className='text-xs md:text-sm font-extralight'>Careers</p>
                        <p className='text-xs md:text-sm font-extralight'>Press</p>
                    </div>

                     <div className='space-y-2'>
                        <h3 className='font-medium text-[20px]'>Resources</h3>
                        <p className='text-xs md:text-sm font-extralight'>Documentation</p>
                        <p className='text-xs md:text-sm font-extralight'>Help Center</p>
                        <p className='text-xs md:text-sm font-extralight'>Community</p>
                        <p className='text-xs md:text-sm font-extralight'>Contact</p>
                    </div>

                    <div className='space-y-2'>
                        <h3 className='font-medium md:text-[20px]'>Social Links</h3>
                        <div className='flex items-center gap-2.5'>
                            <div className='bg-white w-fit p-2.5 rounded-full'>
                                <TbBrandInstagramFilled className="text-[#101727]"  />
                            </div>
                            <div className='bg-white w-fit p-2.5 rounded-full'>
                                <FaSquareFacebook className="text-[#101727]"  />
                            </div>
                            <div className='bg-white w-fit p-2.5 rounded-full'>
                                <FaXTwitter className="text-[#101727]"  />
                            </div>
                        </div>

                    </div>
                      
                </div>

                <div className='container mx-auto'>
                    <div className="divider divider-neutral"></div>
                    <div className='flex items-center justify-between py-3'>
                        <div>
                        <footer className="footer sm:footer-horizontal text-[#FAFAFA] p-4">
                            <aside>
                                <p>© {new Date().getFullYear()} Digitools. All rights reserved.</p>
                            </aside>
                        </footer>
                    </div>

                    <div className='text-[#F2F2F2] flex gap-3 '>
                        <p>Privacy Policy</p>
                        <p>Terms of Service  </p>
                        <p> Cookies</p>

                    </div>

                    </div>
                    
                </div>
                
            </div>
      
        </div>
    );
};

export default Footer;