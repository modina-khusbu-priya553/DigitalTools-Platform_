import 'react';

const Stats = () => {
    return (
        <div>
            <div className="bg-linear-65 from-[#4F39F6] to-[#9514FA] py-16 xl:mt-20 mt-6 md:mt-8 lg:mt-16">
                <div className='container mx-auto flex items-center justify-around text-white'>
                    <div>
                        <div className="stat-value md:text-6xl">50K+</div>
                        <div className="stat-desc text-white md:text-2xl">Active Users</div>
                    </div>
                
                    <div className="divider divider-horizontal"></div>

                    <div>
                        <div className="stat-value md:text-6xl">200+</div>
                        <div className="stat-desc text-white md:text-2xl">Premium Tools</div>
                    </div>
                    <div className="divider divider-horizontal"></div>

                    <div>
                        <div className="stat-value md:text-6xl">4.9</div>
                        <div className="stat-desc text-white md:text-2xl">Rating</div>
                    </div>
                </div>    
            </div> 
        </div>
    );
};

export default Stats;