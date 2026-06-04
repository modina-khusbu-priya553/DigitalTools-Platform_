import './App.css'
import Navbar from './component/navbar/Navbar'

const productsData = async () => {
    const res = await fetch ("/public/Product.json");
    return res.json();

  }

function App() {

  const productsPromise = productsData();

  
  

  return (
    <>
    <Navbar productsPromise={productsPromise}/>
    </>
  )
}

export default App
