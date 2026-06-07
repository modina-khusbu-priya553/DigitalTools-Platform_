import 'react';
import { LinearGradient } from 'react-text-gradients'

const Pricing = () => {
    return (
        <div>
            <div className='container mx-auto py-28 flex flex-col gap-10'>
                <div className='text-center space-y-2.5'>
                    <h2 className='text-[#101727] font-extrabold text-lg md:text-2xl lg:text-5xl'>Simple, Transparent Pricing</h2>
                    <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                <div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
                        <div className="card bg-[#F9FAFC] shadow-sm">
                            <div className="card-body">
                                    <div className='space-y-6'>
                                        <div className=' flex flex-col gap-1.5'>
                                            <h2 className="text-2xl font-bold">Starter</h2>
                                            <p>Perfect for getting started</p>
                                        </div>

                                        <div>
                                            <span className="text-4xl font-bold">$0<span className='text-[20px] font-medium'>/mo</span></span>
                                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                    <span>Access to 10 free tools</span>
                                                </li>
                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                    <span>Basic templates</span>
                                                </li>
                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                    <span>Community support</span>
                                                </li>
                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                    <span>1 project per month</span>
                                                </li>
                                            </ul>
                                            <div className="mt-18">
                                                <button className="btn btn-primary btn-block btn-xs 
                                                    sm:btn-sm md:btn-md lg:btn-lg rounded-full bg-linear-65 from-[#4F39F6] to-[#9514FA]">Get Started Free</button>
                                            </div>

                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className="indicator w-full">
                            <span className="indicator-item indicator-center badge bg-[#F5E6A3] text-[#7A5C00] border-none px-4 py-3 rounded-full text-xs font-semibold">
                                Most Popular
                            </span>

                            <div className="card bg-linear-65 from-[#4F39F6] to-[#9514FA] shadow-sm text-white w-full">
                                <div className="card-body">
                                    <div className='space-y-6'>
                                        <div className='flex flex-col gap-1.5'>
                                        <h2 className="text-2xl font-bold">Pro</h2>
                                        <p>Best for professionals</p>
                                    </div>

                                    <div>
                                        <span className="text-4xl font-bold">$29<span className='text-[20px] font-medium'>/mo</span></span>
                                        <ul className="mt-6 flex flex-col gap-2 text-[16px]">
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Access to all premium tools</span>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            <span>Unlimited templates</span>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Priority support</span>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Unlimited projects</span>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Cloud sync</span>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>Advanced analytics</span>
                                            </li>
                                        </ul>
                                    <div className="mt-18">
                                        <button className="btn btn-primary btn-block btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full bg-white">
                                        <LinearGradient gradient={['to left', '#9514FA ,#4F39F6']}>
                                            <span className="text-xs md:text-lg">Start Pro Trial</span>
                                        </LinearGradient>
                                        </button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-[#F9FAFC] shadow-sm">
                            <div className="card-body">
                                    <div className='space-y-6'>
                                        <div className=' flex flex-col gap-1.5'>
                                            <h2 className="text-2xl font-bold">Enterprise</h2>
                                            <p>For teams and businesses</p>
                                        </div>

                                        <div>
                                            <span className="text-4xl font-bold">$99<span className='text-[20px] font-medium'>/mo</span></span>
                                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                                 <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                    <span>Everything in Pro</span>
                                                </li>
                                                 <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                    <span>Team collaboration</span>
                                                </li>
                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                    <span>Custom integrations</span>
                                                </li>
                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                    <span>Dedicated support</span>
                                                </li>
                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                    <span>SLA guarantee</span>
                                                </li>
                                                <li>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                    <span>Custom branding</span>
                                                </li>
                                            </ul>
                                            <div className="mt-18">
                                                <button className="btn btn-primary btn-block btn-xs 
                                                    sm:btn-sm md:btn-md lg:btn-lg rounded-full bg-linear-65 from-[#4F39F6] to-[#9514FA]">Contact Sales</button>
                                            </div>

                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>    
        </div>
    );
};

export default Pricing;