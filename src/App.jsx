import './App.css'

import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar.jsx";
import PriceOptions from './components/PriceOptions/PriceOptions.jsx';
function App() {


  return (
    <>
    <NavBar></NavBar>
     {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-2xl font-bold text-white bg-background'>TailWind Installtion, Axios, chart</h1>
      
     <PriceOptions></PriceOptions>
    </>
  )
}

export default App
