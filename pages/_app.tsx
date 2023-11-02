import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { motion, AnimatePresence, animate } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div>
        <Component {...pageProps} />
        <motion.div
          className="absolute top-0 left-0 w-full h-screen bg-darkc transform origin-right"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div
          className="absolute top-0 left-0 w-full h-screen bg-darkc transform origin-right"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 4, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default appWithTranslation(MyApp);
