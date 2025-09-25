"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import { FaShoppingCart } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  image: string;
  description?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Razer Pro Click",
    image: "/images/wireless-mouse.webp",
    description:
      "DPI: 16,000 Interface: Bluetooth Buttons: 8 Ergonomic: Right-handed Features: multi-host connectivity for up to 4 devices, 8 independently programmable buttons, 5G advanced optical sensor",
  },
  {
    id: 2,
    name: "Dell 15 Laptop",
    image: "/images/dell-15-laptop-image.avif",
    description:
      "15.6-inch FHD (1920 x 1080) Anti-Glare Non-Touch Display, Intel® 13th Gen Intel® Core™ i5-1334U, 10 cores",
  },
  {
    id: 3,
    name: "Intel Xeon",
    image: "/images/CPU-processor-image.png",
    description:
      "Intel XEON 22 CORE Processor E5-2699V4 2.2GHZ 55MB Smart Cache 9.6 GT/S QPI TDP 145W",
  },
  {
    id: 4,
    name: "GPU Graphics Card",
    image: "/images/GPU-image.png",
    description: "",
  },
  {
    id: 5,
    name: "Dell Wireless Headphones",
    image: "/images/dell-pro-headphones-image.avif",
    description: "",
  },
  {
    id: 6,
    name: "Gaming Desktop",
    image: "/images/desktop-alienware-image.avif",
    description: "",
  },
  { id: 7, name: "Product 7", image: "", description: "" },
  { id: 8, name: "Product 8", image: "", description: "" },
  { id: 9, name: "Product 9", image: "", description: "" },
  { id: 10, name: "Product 10", image: "", description: "" },
];

const Products: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [addedProducts, setAddedProducts] = useState<number[]>([]);

  const cartItems = products.filter((product) =>
    addedProducts.includes(product.id)
  );

  const handleAddButton = (productId: number) => {
    if (!addedProducts.includes(productId)) {
      setCartCount((prev) => prev + 1);
      setAddedProducts((prev) => [...prev, productId]);
    }
  };

  const handleDeleteButton = (productId: number) => {
    if (addedProducts.includes(productId)) {
      setCartCount((prev) => Math.max(prev - 1, 0));
      setAddedProducts((prev) => prev.filter((id) => id !== productId));
    }
  };

  const handleLogInButton = () => {
    setLoggedIn((prev) => !prev);
    alert(loggedIn ? "You are now logged out!" : "You are now logged in!");
  };

  return (
    <section className="relative p-8 max-w-screen pb-100">
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-[url('/images/delivery-background-image.png')] bg-cover bg-center"
          style={{ filter: "brightness(0.4)" }}
        />
      </div>

      <div className="relative max-w mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Our Products:
          </h2>
          <div className="flex items-center gap-6 mb-4">
            <div className="flex items-center gap-2">
              <FaShoppingCart size={24} className="text-white" />
              <p className="text-white bg-red-800 rounded-[50%] w-6 h-6 flex items-center justify-center">
                {cartCount}
              </p>
            </div>

            <Button
              variant={loggedIn ? "secondary" : "success"}
              onClick={handleLogInButton}
              className="!text-white"
            >
              {loggedIn ? "Logged in" : "Log in"}
            </Button>
          </div>

          {/* Cart Items Summary */}
          <div className="mb-6 text-white w-full max-w-2xl text-center">
            <h3 className="font-bold text-xl mb-2">Cart Items:</h3>
            {cartItems.length === 0 ? (
              <p>Cart is empty</p>
            ) : (
              <ol className="list-decimal list-inside">
                {cartItems.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ol>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex flex-wrap gap-6 content-center justify-center max-w-screen w-[100%]">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-md h-[500px] max-w-full w-[99%] hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="w-full h-[250px] bg-gray-200 rounded-[10px] flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="max-w-full max-h-full"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-700 mb-2 mt-4">
                {product.name}
              </h3>

              {product.description && (
                <p className="text-gray-600 flex-1 overflow-auto">
                  {product.description}
                </p>
              )}

              <div className="flex items-center justify-evenly mt-4 gap-5">
                <div className="flex items-center gap-3">
                  <Button
                    variant={
                      addedProducts.includes(product.id)
                        ? "secondary"
                        : "success"
                    }
                    onClick={() => handleAddButton(product.id)}
                    className="mt-auto w-[140px] relative"
                  >
                    {addedProducts.includes(product.id)
                      ? "Added To Cart"
                      : "Add To Cart"}
                  </Button>

                  {addedProducts.includes(product.id) && (
                    <span className="ml-2 w-5 h-5 flex items-center justify-center bg-red-600 text-white text-sm rounded-full">
                      1
                    </span>
                  )}
                </div>

                <Button
                  variant="danger"
                  onClick={() => handleDeleteButton(product.id)}
                  className="w-[150px] h-[40px]"
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
