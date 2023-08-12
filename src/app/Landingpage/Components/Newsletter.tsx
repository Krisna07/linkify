import React, { useState } from "react";
import Button from "../../g_components/Button";

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
    <div className="w-full grid place-items-center bg-sky-900 py-16 text-white ">
      <div className="md:w-fit w-full text-center">
        <h2 className="w-fit text-3xl font-bold mb-4">
          Subscribe to our Newsletter
        </h2>
        <form
          className="flex gap-4 md:flex-row flex-col items-center justify-center"
          onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow text-slate-900"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant={"default"}
            children={"Subscribe"}
            className="w-fit"
            icon={false}
          />
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
