import Link from "next/link";
import react from "react";

const HomePage = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Welcome to Linkify</h1>
      <div className="flex justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href={"/user_auth/signup"}> Sign up</Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href={"/user_auth/signin"}> Sign in</Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/demo"> Demo</Link>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
