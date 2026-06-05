import { Suspense } from 'react';
import './App.css'
import Banner from './component/banner/Banner';
import DigitalTools from './component/digitalTools/DigitalTools';
import Navbar from './component/navbar/Navbar'
import Stats from './component/StatsSection/Stats';

const productsData = async () => {
    const res = await fetch ("/public/Product.json");
    return res.json();

  }

function App() {

  const productsPromise = productsData();

  
  

  return (
    <>
    <Navbar />
    <Banner/>
    <Stats></Stats>

    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <DigitalTools productsPromise={productsPromise}/>
    </Suspense>

    </>
  )
}

export default App
