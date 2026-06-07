import 'react';

const Steps = () => {
    return (
        <div>
            <div  className='bg-[#F9FAFC] shadow-secondary mt-6 lg:mt-20'>
                <div className='container mx-auto lg:py-25 py-6 space-y-10'>
                    <div className='flex flex-col items-center gap-2'>
                        <h2 className='font-extrabold text-2xl md:text-5xl'>Get Started in 3 Steps</h2>
                        <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
                        <div className='card bg-base-100 shadow-sm p-6'>
                            <div className="flex items-center justify-end">
                                <span className="  bg-linear-65 from-[#4F39F6] to-[#9514FA] text-white font-medium rounded-full px-3 py-2">01</span>
                            </div>
                            <div className="flex card  items-center justify-center">
                                <figure className="p-6 bg-purple-100 rounded-full w-fit">
                                    <img
                                    src="https://i.ibb.co/1YrbscbB/user.png"
                                    alt="user"
                                    className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Create Account</h2>
                                    <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                                </div>
                            </div>

                        </div>

                        <div className='card bg-base-100 shadow-sm p-6'>
                            <div className="flex items-center justify-end">
                                <span className="  bg-linear-65 from-[#4F39F6] to-[#9514FA] text-white font-medium rounded-full px-3 py-2">02</span>
                            </div>
                            <div className="flex card  items-center justify-center">
                                <figure className="p-6 bg-purple-100 rounded-full w-fit">
                                    <img
                                    src="https://i.ibb.co/QF23Kyy1/package.png"
                                    alt="products"
                                    className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Choose Products</h2>
                                    <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                                </div>
                            </div>

                        </div>

                        <div className='card bg-base-100 shadow-sm p-6'>
                            <div className="flex items-center justify-end">
                                <span className="bg-linear-65 from-[#4F39F6] to-[#9514FA] text-white font-medium rounded-full px-3 py-2">03</span>
                            </div>
                            <div className="flex card  items-center justify-center">
                                <figure className="p-6 bg-purple-100 rounded-full w-fit">
                                    <img
                                    src="https://i.ibb.co/7NTtJ5BZ/rocket.png"
                                    alt="rocket"
                                    className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Start Creating</h2>
                                    <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                                </div>
                            </div>

                        </div>
                        

                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Steps;