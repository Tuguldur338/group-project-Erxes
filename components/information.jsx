"use client";

import { useState, useEffect } from "react";

const Information = () => {
  const [address, setAddress] = useState("");
  const [savedAddress, setSavedAddress] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("deliveryAddress");
    if (stored) setSavedAddress(stored);
  }, []);

  const handleLogin = () => {
    if (address.trim()) {
      localStorage.setItem("deliveryAddress", address);
      setSavedAddress(address);
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

      {/* Address input + login button */}
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

      {/* Saved address */}
      {savedAddress && (
        <p className="mt-4 text-gray-700">
          Saved address: <span className="font-medium">{savedAddress}</span>
        </p>
      )}
    </section>
  );
};

export default Information;
