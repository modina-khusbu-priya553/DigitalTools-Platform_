import 'react';
import { LinearGradient } from 'react-text-gradients'
import { FiShoppingCart } from "react-icons/fi";


const Navbar = () => {
    return (
        <div>            
            <div>
                <div className="bg-base-100 shadow-sm flex">

                    {/* Nav-Start */}
                    <div className="navbar-start md:pl-52">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
                                <li><a>Products</a></li>
                                <li><a>Features</a></li>
                                <li><a>Pricing</a></li>
                                <li><a>Testimonials</a></li>                            
                                <li><a>FAQ</a></li>
                            </ul>
                        </div>
                        <LinearGradient gradient={['to left', '#9514FA ,#4F39F6']}>
                                <h2 className="md:text-3xl text-lg font-bold">DigiTools</h2>
                        </LinearGradient>
                    </div>
                    
                    
                {/*Nav-center  */}

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-semibold">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>                            
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>

                    {/* Nav-End */}
                    <div className="navbar-end flex items-center justify-center gap-4 py-6">
                            <button><FiShoppingCart /></button>
                            <h2 className="font-semibold">Login</h2>
                            <a className="btn btn-xs sm:btn-sm md:btn-md rounded-full font-semibold text-white 
                                bg-linear-65 from-[#4F39F6] from-60% to-[#9514FA] via-40%">Get Started</a>
                    </div>
                                      
                </div>
            </div>            
        </div>
    );
};

export default Navbar;