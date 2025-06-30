import { motion } from "framer-motion";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <motion.h2
        className="text-6xl font-bold text-blue-500"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        COMING SOON
      </motion.h2>
    </div>
  );
}
