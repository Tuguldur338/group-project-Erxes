import React from "react";

const Body: React.FC = () => {
  return (
    <main className="min-h-screen p-8">
      {/* Add your body content here */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">Welcome to our website!</h1>
        <p className="text-gray-600 mt-4">This is the main content area.</p>
      </div>
    </main>
  );
};

export default Body;
