import { motion } from "framer-motion";

function Notification({ message }) {
  let variants = {
    initial: {
      opacity: 1,
      scale: 1,
    },
    final: {
      opacity: 0,
      scale: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="final"
      transition={{
        delay: 2,
      }}
      variants={variants}
      className={`fixed z-50 px-5 py-3 text-white ${
        message?.type === "error" ? "bg-red-500" : "bg-[#104cba]"
      } rounded-md shadow-sm top-1/2 -translate-y-1/2 right-10 h-fit shadow-gray-500/30`}
    >
      <p className="flex items-center justify-between">{message?.message}</p>
    </motion.div>
  );
}

export default Notification;
