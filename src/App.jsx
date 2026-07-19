import { useState } from "react";
import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";
import Students from "./components/Students";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Samsung Galaxy S25",
      price: 75000,
      category: "Mobile",
      rating: 4.8,
      inStock: true,
      isAdded: false,
    },
    {
      id: 2,
      name: "MacBook Air M4",
      price: 115000,
      category: "Laptop",
      rating: 4.9,
      inStock: false,
      isAdded: false,
    },
    {
      id: 3,
      name: "Sony WH-1000XM5",
      price: 28000,
      category: "Headphones",
      rating: 4.7,
      inStock: true,
      isAdded: false,
    },
    {
      id: 4,
      name: "iPad Air",
      price: 62000,
      category: "Tablet",
      rating: 4.5,
      inStock: false,
      isAdded: false,
    },
  ]);
  // const [cart, setCart] = useState(0);
   const cartCount = products.filter(product => product.isAdded).length;
   const [search,SetSearch]=useState('')
   console.log(search)
  function handleAddToCart(id) {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          // if (product.isAdded) {
          //   setCart((prev) => prev - 1);
          // } else {
          //   setCart((prev) => prev + 1);
          // }
          return {
            ...product,
            isAdded: ,
          };
        } else {
          return product;
        }
      }),
    );
  }

  const ProductData = products.map((product) => {
    return (
      <ProductCard
        id={product.id}
        name={product.name}
        price={product.price}
        category={product.category}
        rating={product.rating}
        inStock={product.inStock}
        isAdded={product.isAdded}
        onAddToCart={handleAddToCart}
      />
    );
  });
  return (
    <>
      {cartCount}
      <input type="text" placeholder="Search" value={search} onChange={(e)=>SetSearch(e.target.value)} />
      {ProductData}
    </>
  );
}

export default App;
