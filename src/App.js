import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const host = "http://localhost:5000/price"

  const [currentPrice, setCurrentPrice] = useState(0);
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
