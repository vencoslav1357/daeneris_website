"use client";

import Image from "next/image";
import { useState } from "react";
import { Toaster, toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDelete = async () => {
      try {
        const response = await fetch("https://centrumservers.com/delete-account", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            email: email, 
            password: password 
          }),
        });
    
        if (response.ok) {
          toast.success('Account successfully deleted');
          setEmail("");
          setPassword("");
          // Redirect to home page after 5 seconds
          setTimeout(() => {
            router.push('/');
          }, 5000);
        } else {
          toast.error('Failed to delete account. Please check your credentials.');
        }
      } catch {
        toast.error('Server communication error occurred');
      }
    };
  
    return (
      <div className="min-h-screen bg-[#fff] flex flex-col items-center justify-center p-6 ">
        <Toaster position="top-center" />
        <div className="w-full max-w-md space-y-8 bg-[#151515] p-8 rounded-2xl shadow-[black] shadow-lg">
          <div className="flex flex-col items-center">
            <Image
              src="/images/DaenerisLogoBlue.png"
              width={200}
              height={200}
              alt="logo"
              className="mb-6"
            />
            <h1 className="text-3xl font-bold text-white mb-2">Delete Account</h1>
            <p className="text-gray-400 text-center mb-8">
              This action is irreversible. Please confirm your credentials.
            </p>
          </div>
  
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-[#1900ff] focus:ring-2 focus:ring-[#1900ff] outline-none transition-all"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-[#1900ff] focus:ring-2 focus:ring-[#1900ff] outline-none transition-all"
            />
          </div>
  
          {!showConfirm ? (
            <button
              onClick={() => setShowConfirm(true)}
              className="w-full mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Continue with Account Deletion
            </button>
          ) : (
            <div className="space-y-4 mt-6">
              <p className="text-red-400 text-sm text-center">
                Are you sure you want to delete your account?
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Confirm Deletion
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}