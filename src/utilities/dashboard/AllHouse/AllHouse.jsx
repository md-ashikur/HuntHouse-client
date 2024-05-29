import { useEffect, useState } from "react";
import SingleCardDashboard from "../../../components/SingleCardDashboard";

const AllHouse = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/house/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  return (
    <div>
    <h1 className="text-5xl font-bold text-center">All Produts</h1>
    <div className="my-16 flex flex-wrap gap-4">
      {products.map((house) => (
        <SingleCardDashboard
          key={house.id}
          house={house}
          onDelete={handleDeleteProduct}
        />
      ))}
    </div>
  </div>
  );
};

export default AllHouse;
