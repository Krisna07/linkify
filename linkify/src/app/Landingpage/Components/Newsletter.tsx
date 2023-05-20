import React, { useState } from "react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform actions with the submitted email (e.g., send it to an API)
    console.log("Submitted email:", email);
    // Clear the input field
    setEmail("");
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">
        Subscribe to our Newsletter
      </h2>
      <form className="flex" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          className="py-2 px-4 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
