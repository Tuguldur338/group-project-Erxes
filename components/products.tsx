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
    image: "/images/laptop-image.avif",
    description:
      "15.6-inch FHD (1920 x 1080) Anti-Glare Non-Touch Display, Intel® 13th Gen Intel® Core™ i5-1334U, 10 cores",
  },
  {
    id: 3,
    name: "CPU Processor",
    image: "/images/CPU-processor-image.webp",
  },
  {
    id: 4,
    name: "Product 4",
    image: "/images/CPU-processor-image.webp",
  },
];

const Products: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);
  const [addedProducts, setAddedProducts] = useState<number[]>([]);

  const handleAddButton = (productId: number) => {
    if (!addedProducts.includes(productId)) {
      setCartCount((prev) => prev + 1);
      setAddedProducts((prev) => [...prev, productId]);
    }
  };

  return (
    <section className="relative p-8 max-w-screen pb-20">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-[url('/images/delivery-background-image.png')] bg-cover bg-center"
          style={{ filter: "brightness(0.4)" }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Our Products:
          </h2>

          <div className="flex items-center gap-2">
            <FaShoppingCart size={24} className="text-white" />
            <p className="text-white">{cartCount}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 content-center justify-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-md h-[500px] w-[400px] hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="w-full h-[250px] bg-gray-200 flex items-center justify-center">
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

              <Button
                variant={
                  addedProducts.includes(product.id) ? "secondary" : "success"
                }
                onClick={() => handleAddButton(product.id)}
                className="mt-auto w-[170px]"
              >
                {addedProducts.includes(product.id)
                  ? "Added To Cart"
                  : "Add To Cart"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
