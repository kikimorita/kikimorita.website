"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
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
            fontSize: "clamp(80px, 15vw, 200px)",
            lineHeight: "90%",
            color: "var(--color-blue-300)",
            margin: 0,
            textAlign: "left",
          }}
        >
          404
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
          Page not found
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
          The page you're looking for doesn't exist or has been moved.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        style={{
          alignSelf: "flex-end",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: '"MADE TOMMY", system-ui, sans-serif',
            fontWeight: 400,
            fontSize: "16px",
            color: "var(--color-blue-300)",
            textDecoration: "none",
            textTransform: "none",
            padding: "12px 24px",
            border: "1px solid var(--color-blue-300)",
            borderRadius: "2px",
            display: "inline-block",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-blue-300)";
            e.currentTarget.style.color = "var(--color-blue-900)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "var(--color-blue-300)";
          }}
        >
          go back home
        </Link>
      </motion.div>
    </main>
  );
}
