"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--spacing-md)",
        gap: "var(--spacing-md)",
        backgroundColor: "var(--color-blue-900)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "var(--spacing-sm)",
          textAlign: "left",
        }}
      >
        <h1
          style={{
            fontFamily: '"Arges-Heavy", "Arges", sans-serif',
            fontWeight: 950,
            fontSize: "clamp(60px, 12vw, 150px)",
            lineHeight: "90%",
            color: "var(--color-coral-300)",
            margin: 0,
          }}
        >
          Oops!
        </h1>
        <h2
          style={{
            fontFamily: '"MADETOMMY-Light", "MADE TOMMY", sans-serif',
            fontWeight: 300,
            fontSize: "clamp(18px, 3vw, 24px)",
            lineHeight: "150%",
            color: "var(--color-blue-100)",
            margin: 0,
          }}
        >
          Something went wrong
        </h2>
        <p
          style={{
            fontFamily: '"MADETOMMY-Light", "MADE TOMMY", sans-serif',
            fontWeight: 300,
            fontSize: "clamp(14px, 2.5vw, 16px)",
            lineHeight: "150%",
            color: "var(--color-blue-200)",
            maxWidth: "500px",
            margin: 0,
          }}
        >
          We encountered an unexpected error. Please try again.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <button
          onClick={reset}
          style={{
            fontFamily: '"MADE TOMMY", system-ui, sans-serif',
            fontWeight: 400,
            fontSize: "16px",
            color: "var(--color-blue-100)",
            backgroundColor: "transparent",
            textTransform: "none",
            padding: "12px 24px",
            border: "1px solid var(--color-blue-300)",
            borderRadius: "2px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-blue-300)";
            e.currentTarget.style.color = "var(--color-blue-900)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "var(--color-blue-100)";
          }}
        >
          try again
        </button>
      </motion.div>
    </main>
  );
}
