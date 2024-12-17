"use client";

import Image from "next/image";
import { useState } from "react";
import { Toaster, toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils";

export default function Home() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
      <div className="min-h-screen bg-[#fff] flex flex-col items-center justify-center p-6">
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

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="w-full">
                Delete your account
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your
                  account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  className={cn(buttonVariants({ variant:"destructive"}))}
                  onClick={handleDelete}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    );
}