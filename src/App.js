import React, { useEffect, useState } from 'react';
import './App.css';
import CountryPage from './component/countrypage/CountryPage.component';
const App = () => {

  const [data, setData] = useState([]);

  useEffect(() =>{
    const fetchData = async () =>{
      try{
        const response = await fetch('https://restcountries.com/v3.1/all')
        const result = await response.json()
        console.log(result)
        setData(result)
      }catch(error){
        console.log('error in api fetch',error)
      }
    } 
    fetchData()
  },[])


  return (
   <div className='App'>
    <CountryPage data = {data} />
   </div>
  );
}

export default App;
