import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const Navbar: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">Arun Store</Link>
        </div>
        <div className="text-white">
          <Link to="/cart" className="flex items-center">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8M10 13l1.6 8m5.4-8l1.6 8M6 9h12m-6 6v6"
              />
            </svg>
            <span>Cart ({cartItems.length})</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
