import { Suspense, useState } from 'react';
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
  const [selectedType, setSelectedType] = useState("products");
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <>
    <Navbar selectedProducts ={selectedProducts}
    />
    <Banner/>
    <Stats></Stats>

    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <DigitalTools 
      productsPromise={productsPromise}
      selectedProducts ={selectedProducts}
      setSelectedProducts ={setSelectedProducts}
      selectedType ={selectedType}
      setSelectedType={setSelectedType}

      
      />
    </Suspense>

    </>
  )
}

export default App
