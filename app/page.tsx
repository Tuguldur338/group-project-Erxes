import React from "react";
import Image from "next/image";
import "./globals.css";
import Products from "@/components/products";

const Home: React.FC = () => {
  return (
    <div>
      <Products />
    </div>
  );
};

export default Home;
