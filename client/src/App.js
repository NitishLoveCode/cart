import './App.css';
import Header from './component/header/Header';
import { createContext, useEffect, useState } from "react";
import Home from './component/home/Home';

const All_products=createContext()
function App() {
  const [data,setdata]=useState()
  
  try{
    const callData=async()=>{
      const res=await fetch("https://fakestoreapi.com/products",{
        method:"GET",
        headers:{
          "content-type":"application/json"
        }
      })
      const product=await res.json()
      setdata(product)
    }
    useEffect(()=>{
      callData()
    },[])
    
  }catch(err){
    console.log(err)
  }
  return (
    <>
    <All_products.Provider value={{data}}>
      <Header/>
      <Home/>
    </All_products.Provider>
    </>
  );
}

export default App;
export {All_products}
