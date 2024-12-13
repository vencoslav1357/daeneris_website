// pages/login.tsx
import { useState } from "react";

export default function Delete() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleDelete = async () => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      // Handle successful login
      console.log("Login successful");
    } else {
      // Handle login error
      console.error("Login failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl mb-4">Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleDelete}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Login
      </button>
    </div>
  );
}