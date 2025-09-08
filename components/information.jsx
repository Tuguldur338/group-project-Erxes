"use client";

import { useState, useEffect } from "react";

const Information = () => {
  const [address, setAddress] = useState("");
  const [savedAddresses, setSavedAddresses] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("deliveryAddresses");
    if (stored) setSavedAddresses(JSON.parse(stored));
  }, []);

  const handleLogin = () => {
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

  return (
    <section className="flex flex-col items-center justify-center py-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Enter Your Delivery Information
      </h2>

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Enter your address..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="px-4 py-2 w-[300px] rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />

        <button
          onClick={handleLogin}
          className="px-6 py-2 bg-amber-600 text-white !rounded-[8px] hover:bg-amber-700 transition-all"
        >
          Log in
        </button>
      </div>

      {/* Saved addresses list */}
      {savedAddresses.length > 0 && (
        <div className="mt-6 w-[300px] text-gray-700">
          <h3 className="font-semibold mb-2">Saved addresses:</h3>
          <ul className="list-disc list-inside space-y-1">
            {savedAddresses.map((addr, index) => (
              <li key={index}>{addr}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Information;
