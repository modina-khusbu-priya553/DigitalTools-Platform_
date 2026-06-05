import 'react';

const Stats = () => {
    return (
        <div>
            <div className="bg-linear-65 from-[#4F39F6] to-[#9514FA] py-16 mt-20">
                <div className='container mx-auto flex items-center justify-around text-white'>
                    <div className='space-y-3'>
                        <div className="stat-value text-6xl">50K+</div>
                        <div className="stat-desc text-white text-2xl">Active Users</div>
                    </div>
                
                    <div className="divider divider-horizontal"></div>

                    <div className='space-y-3'>
                        <div className="stat-value text-6xl">200+</div>
                        <div className="stat-desc text-white text-2xl">Premium Tools</div>
                    </div>
                    <div className="divider divider-horizontal"></div>

                    <div className='space-y-3'>
                        <div className="stat-value text-6xl">4.9</div>
                        <div className="stat-desc text-white text-2xl">Rating</div>
                    </div>
                </div>    
            </div> 
        </div>
    );
};

export default Stats;