import 'react';

const SelectedCards = () => {
    return (
        <div>
            <div className='flex  flex-col p-10 rounded-lg shadow-sm border-2 border-[#F2F2F2] gap-6 container mx-auto'>
                <h2 className='font-bold text-2xl'>Your cart</h2>
                <div className="flex items-center gap-4 bg-[#F9FAFC] justify-between p-5 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-4">
                        <img src= " " alt=" "/>
                    <div>
                        <h2 className="text-xl font-bold flex items-center gap-2">Writing Tool</h2>
                        <p className="text-gray-600">$29</p>
                    </div>
                </div>
                    <button className="btn text-red-500 hover:text-red-700">remove</button>
  
                </div>

                <div className='flex items-center justify-between'>
                    <p className="text-gray-600">Total: </p>
                    <h2 className='font-bold text-2xl'>$78</h2>
                </div>

                <button className='btn bg-linear-65 from-[#4F39F6] to-[#9514FA] 
                     text-white font-bold rounded-full py-4'>Proceed To Checkout</button>


                
            </div>    
        </div>
        
    );


};



export default SelectedCards;