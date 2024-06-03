import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../Cart/cartSlice";
import { Product as ProductType } from "../../types/product";
import axios from "axios";
import Navbar from "../Navbar";

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  const increaseCount = () => {
    if (cartCount < 5) {
      setCartCount((prevCount) => prevCount + 1);
    }
  };
  const decCount = () => {
    if (cartCount > 0) {
      setCartCount((prevCount) => prevCount - 1);
    }
  };

  const addToCart = (product: ProductType) => {
    dispatch(addItem({ product, quantity: cartCount }));
  };
  return (
    <React.Fragment>
      <Navbar />
      <div className=" max-w-md my-20 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-cover md:w-48"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {product.category}
            </div>
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
              {product.title}
            </h2>
            <p className="mt-2 text-gray-500">{product.description}</p>
            <div className="mt-4 flex items-center">
              <span className="text-gray-500">Rs {product.price}</span>
              <button
              disabled={cartCount === 0}
                onClick={() => addToCart(product)}
                className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button>
              <div className="ml-2">
                <button
                  onClick={decCount}
                  className="text-lg text-gray-500"
                  disabled={cartCount === 0}
                >
                  -
                </button>
                <span className="mx-2 text-lg">{cartCount}</span>
                <button
                  onClick={increaseCount}
                  className="text-lg text-gray-500"
                  disabled={cartCount === 5}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
