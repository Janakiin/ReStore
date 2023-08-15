import {useEffect, useState} from "react";

function App() {
  const [products, setProducts] = useState([ 
    {name: 'product1', price: 100.00},
    {name: 'product2', price: 200.00},
  ]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, []);

  function addProducts() {
    setProducts(prevState => [...prevState, {name: 'product' + Number(prevState.length + 1), price : (prevState.length + 1) * 100}])
  }

  return (
    <div>
      <h1>Re-Store</h1>
      <ul>{products.map((item, i) => (
        <li key={i}>{item.name + ' - ' + item.price}</li>
      ))}</ul>
      <button onClick={addProducts}>Add product</button>
    </div>
  );
}

export default App;


