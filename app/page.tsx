"use client";

import { motion } from "framer-motion";

const MLogo = () => (
  <svg
    viewBox="0 0 631 498.09"
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Kikimorita Logo"
    style={{ overflow: "visible" }}
  >
    <g transform="matrix(1 0 0 1 0 4.5)">
      <path
        d="M0.000 0.000C0.000 0.000 177.893 177.864 177.893 177.864C177.893 177.864 0.000 355.734 0.000 355.734C0.000 355.734 92.190 355.734 92.190 355.734C92.190 355.734 243.967 204.854 243.967 204.854C243.967 204.854 270.985 178.330 270.985 178.330C270.985 178.330 92.196 0.000 92.196 0.000C92.196 0.000 0.000 0.000 0.000 0.000Z"
        fillRule="nonzero"
        fill="var(--color-blue-100)"
      />
    </g>
    <g transform="matrix(1 0 0 1 270.987 0)">
      <path
        d="M179.979 179.577C179.979 179.577 0.000 0.000 0.000 0.000C0.000 0.000 0.000 364.729 0.000 364.729C0.000 364.729 298.184 364.736 298.184 364.736C298.184 364.736 360.012 364.729 360.012 364.729C360.012 364.729 360.012 0.018 360.012 0.018C360.012 0.018 179.979 179.577 179.979 179.577ZM294.496 310.264C294.496 310.264 65.475 310.264 65.475 310.264C65.475 310.264 65.475 159.497 65.475 159.497C65.475 159.497 177.192 270.775 177.192 270.775C177.192 270.775 180.173 273.411 180.173 273.411C180.173 273.411 294.496 159.533 294.496 159.533C294.496 159.533 294.496 310.264 294.496 310.264Z"
        fillRule="nonzero"
        fill="var(--color-blue-100)"
      />
    </g>
    <g transform="matrix(1 0 0 1 0 443.611)">
      <path
        d="M630.994 54.475C630.994 54.475 0.000 54.475 0.000 54.475C0.000 54.475 0.000 0.000 0.000 0.000C0.000 0.000 630.994 0.000 630.994 0.000C630.994 0.000 630.994 54.475 630.994 54.475Z"
        fillRule="nonzero"
        fill="var(--color-blue-100)"
      />
    </g>
  </svg>
);

const ContentInfo = () => (
  <>
    <p
      style={{
        fontFamily: '"MADETOMMY-Light", "MADE TOMMY", sans-serif',
        fontWeight: 300,
        fontSize: 17,
        lineHeight: "160%",
        color: "var(--color-blue-500)",
        whiteSpace: "pre-wrap",
        textAlign: "left",
      }}
      className="w-full self-stretch"
    >
      My website is under construction and will be published soon.
      {"\n"}If you have any requests or questions please contact me through following email:
    </p>

    <a
      href="mailto:design@kikimorita.com"
      style={{
        fontFamily: '"MADETOMMY-Bold", "MADE TOMMY", sans-serif',
        fontWeight: 700,
        fontSize: 17,
        lineHeight: "175%",
        whiteSpace: "pre-wrap",
        textAlign: "left",
        textDecoration: "none",
      }}
      className="w-full self-stretch text-blue-500 transition-colors duration-200 hover:text-blue-400 cursor-pointer"
    >
      design@kikimorita.com
    </a>
  </>
);

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "var(--color-blue-200)",
      }}
      className="w-screen h-screen overflow-hidden relative"
    >
      {/* ========================================================
          DESKTOP & TABLET VIEWPORT (md and above: >= 768px)
         ======================================================== */}
      <div
        style={{
          padding: "var(--spacing-lg)", // 70px
          backgroundColor: "var(--color-blue-200)",
        }}
        className="hidden md:flex w-full h-full relative flex-col items-end justify-center overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: "absolute",
            left: -20,
            top: 167.113,
            width: 631,
            height: 498.09,
          }}
          className="flex flex-col items-start justify-center flex-shrink-0 pointer-events-none"
        >
          <MLogo />
        </motion.div>

        <div
          style={{
            width: "100%",
            maxWidth: 550,
            gap: "var(--spacing-md)", // 32px
          }}
          className="relative flex flex-col items-start justify-center z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            style={{
              fontFamily: '"Arges-Heavy", "Arges", sans-serif',
              fontWeight: 950,
              fontVariationSettings: '"wght" 950',
              fontSize: 150,
              lineHeight: "90%",
              letterSpacing: "0.01em",
              textTransform: "uppercase",
              color: "var(--color-blue-300)",
              whiteSpace: "pre-wrap",
              textAlign: "left",
            }}
            className="w-full self-stretch"
          >
            stay tuned...
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            style={{
              gap: "var(--spacing-xs)", // 8px
            }}
            className="w-full self-stretch flex flex-col items-start"
          >
            <ContentInfo />
          </motion.div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEWPORT (< 768px)
         ======================================================== */}
      <div
        style={{
          paddingTop: "var(--spacing-lg)", // 70px
          paddingBottom: "var(--spacing-lg)", // 70px
          paddingLeft: "var(--spacing-md)", // 32px
          paddingRight: "var(--spacing-md)", // 32px
          backgroundColor: "var(--color-blue-200)",
        }}
        className="flex md:hidden w-full h-full relative flex-col items-start justify-end overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: "absolute",
            left: -20,
            top: 133,
            width: 378,
            height: (378 * 498.09) / 631,
          }}
          className="flex flex-col items-start justify-center flex-shrink-0 pointer-events-none"
        >
          <MLogo />
        </motion.div>

        <div
          style={{
            width: "100%",
            maxWidth: 550,
            gap: "var(--spacing-xs)", // 8px
          }}
          className="relative flex flex-col items-start text-left z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            style={{
              fontFamily: '"Arges-Heavy", "Arges", sans-serif',
              fontWeight: 950,
              fontVariationSettings: '"wght" 950',
              fontSize: 96,
              lineHeight: "90%",
              letterSpacing: "0.01em",
              textTransform: "uppercase",
              color: "var(--color-blue-300)",
              whiteSpace: "pre-wrap",
              textAlign: "left",
            }}
            className="w-full self-stretch"
          >
            stay tuned...
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="w-full self-stretch flex flex-col items-start text-left"
          >
            <ContentInfo />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
