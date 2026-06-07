import { Suspense, useState } from 'react';
import './App.css'
import Banner from './component/banner/Banner';
import DigitalTools from './component/digitalTools/DigitalTools';
import Navbar from './component/navbar/Navbar'
import Stats from './component/StatsSection/Stats';
import Steps from './component/steps/Steps';
import Pricing from './component/pricing/Pricing';
import Footer from './component/footer/Footer';
import { ToastContainer} from 'react-toastify';



const productsData = async () => {
    const res = await fetch ("/Product.json");
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

    <Steps />
    <Pricing />
    <Footer />

    <ToastContainer />

    </>
  )
}

export default App
