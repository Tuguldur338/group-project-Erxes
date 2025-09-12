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
    <section className="flex flex-col items-center justify-center py-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Enter your delivery address
      </h2>

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Enter your address..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="px-4 py-2 w-[300px] rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />

        <Button
          variant="success"
          onClick={handleAddress}
          className="px-6 py-2 bg-amber-600 text-white !rounded-[8px] hover:bg-amber-700 transition-all"
        >
          Save address
        </Button>
      </div>

      {savedAddresses.length > 0 && (
        <div className="mt-6 w-[300px] text-gray-700">
          <h3 className="font-semibold mb-2">Saved addresses:</h3>
          <ul className="space-y-2">
            {savedAddresses.map((addr, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-lg"
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
    </section>
  );
};

export default Information;
