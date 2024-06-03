import React from "react";
import { useEffect, useState } from "react";
import { Product } from "../../types/product";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const viewProduct = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <h2 className="text-2xl font-bold my-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <div className="h-48 mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain rounded"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-2">
              {product.description.slice(0, 100)}
            </p>
            <p className="text-xl font-bold mb-4">${product.price}</p>
            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={() => viewProduct(product.id)}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                View item
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductList;
