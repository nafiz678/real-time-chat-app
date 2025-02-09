import { SignInButton } from "@clerk/nextjs";
import { motion } from "motion/react";

export default function SignInPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 transition-all"
      >
        <SignInButton />
      </motion.button>
    </div>
  );
}
