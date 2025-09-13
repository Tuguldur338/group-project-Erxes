"use client";

import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

const Information: React.FC = () => {
  const [address, setAddress] = useState<string>("");
  const [savedAddresses, setSavedAddresses] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("deliveryAddresses");
    if (stored) setSavedAddresses(JSON.parse(stored));
  }, []);

  const handleAddress = (): void => {
    if (address.trim()) {
      const updated = [...savedAddresses, address];
      localStorage.setItem("deliveryAddresses", JSON.stringify(updated));
      setSavedAddresses(updated);
      setAddress("");
      alert("Address saved!");
    } else {
      alert("Please enter your address.");
    }
  };

  const handleDelete = (index: number): void => {
    const updated = savedAddresses.filter((_, i) => i !== index);
    localStorage.setItem("deliveryAddresses", JSON.stringify(updated));
    setSavedAddresses(updated);
  };

  return (
    <section className="relative flex flex-col items-center justify-center w-full h-screen">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/images/delivery-background-image.png')] bg-cover bg-center"></div>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Enter your delivery address
        </h2>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter your address..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="px-4 py-2 w-[300px] rounded-lg border border-gray-300 text-white placeholder-white bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <Button
            variant="success"
            onClick={handleAddress}
            className="px-6 py-2 bg-green-600 text-white !rounded-[8px] hover:bg-green-700 transition-all"
          >
            Save address
          </Button>
        </div>

        {savedAddresses.length > 0 && (
          <div className="mt-6 w-[300px] text-white">
            <h3 className="font-semibold mb-2">Saved addresses:</h3>
            <ul className="space-y-2">
              {savedAddresses.map((addr, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-green-900/50 px-3 py-2 rounded-lg"
                >
                  <span>{addr}</span>

                  <Button
                    variant="danger"
                    onClick={() => handleDelete(index)}
                    className="px-3 py-1 bg-red-600 text-white text-sm !rounded-lg hover:bg-red-700 transition-all duration-300"
                  >
                    Delete
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Information;
