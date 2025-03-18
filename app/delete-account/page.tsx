'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
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
} from "@/components/ui/alert-dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function DeleteAccountPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

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
        setDialogMessage("Account successfully deleted.");
        setIsDialogOpen(true);
        setEmail("");
        setPassword("");
        setTimeout(() => {
          router.push('/');
        }, 5000);
      } else {
        setDialogMessage("Failed to delete account. Please check your credentials.");
        setIsDialogOpen(true);
      }
    } catch {
      setDialogMessage("Server communication error occurred.");
      setIsDialogOpen(true);
    }
  };

  return (
    <section className="w-screen min-h-screen flex items-center justify-center overflow-x-hidden pb-[5vh] bg-gradient-to-b from-slate-100 to-white dark:from-[#151515] dark:to-[#1a1a1a]">
      <div className="w-[85vw] max-w-4xl flex flex-col gap-8 overflow-y-auto overflow-x-hidden">
        {/* Hero Section */}
        <div className="relative h-[40vh] w-full flex flex-col items-center justify-center">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-black dark:text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
            >
              Delete Account
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-light"
            >
              This action is irreversible. Please confirm your credentials.
            </motion.p>
          </div>
        </div>

        {/* Inputs and Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-6 w-full max-w-md mx-auto mt-8"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-[#202020] text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:border-[#1900ff] focus:ring-2 focus:ring-[#1900ff] outline-none transition-all"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-[#202020] text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:border-[#1900ff] focus:ring-2 focus:ring-[#1900ff] outline-none transition-all"
          />

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
                  className={cn(buttonVariants({ variant: "destructive" }))}
                  onClick={handleDelete}
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </motion.div>

        {/* Result Dialog */}
        <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{dialogMessage.includes("successfully") ? "Success" : "Error"}</AlertDialogTitle>
              <AlertDialogDescription>
                {dialogMessage}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction
                className={cn(buttonVariants({ variant: "default" }))}
                onClick={() => setIsDialogOpen(false)}
              >
                Close
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </section>
  );
}