import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const host = "https://lohum-assignment-gaurav.onrender.com/price"

  const [currentPrice, setCurrentPrice] = useState("loading...");
  useEffect(() => {
    const getPrice = async () => {
      const response = await fetch(host, {
        method: 'GET'
      })
      const json = await response.json();
      setCurrentPrice(json.price)
      console.log(json.price)
    }
    getPrice()
  }, [])
  return (
    <div className="App">
      The current price is : {currentPrice}
    </div>
  );
}

export default App;
