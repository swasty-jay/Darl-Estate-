import { motion } from "framer-motion";
import NavBar from "../Components/NavBar";

/**
 * Landing Page Component
 *
 * This component represents the main landing page of the website, including:
 * - A navigation bar
 * - A hero section with an introduction
 * - A stats section displaying key business metrics
 *
 * Responsive design ensures a great user experience across all screen sizes.
 */
export default function LandingPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section */}
      <section className="px-6 md:px-10 py-20 flex flex-col md:flex-row items-center gap-10">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            We Provide <br /> Architectural Design <br /> and Construction
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            More than 100 building and housing projects completed. <br />
            Trusted by top clients for high-quality work.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition">
            Discover More
          </button>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <img
            src="/assets/building.jpg"
            alt="Modern building"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="px-6 md:px-10 py-10 bg-gray-800 flex flex-col md:flex-row justify-around text-center gap-6 md:gap-0">
        <StatsCard number="300+" label="Happy Clients" />
        <StatsCard number="900+" label="Amazing Projects" />
        <StatsCard number="25+" label="Years Operated" />
      </section>
    </div>
  );
}

/**
 * StatsCard Component
 *
 * Displays individual statistics in a structured format.
 * @param {string} number - The number/statistic to display.
 * @param {string} label - The label describing the statistic.
 */
const StatsCard = ({ number, label }) => {
  return (
    <div className="space-y-2">
      <h3 className="text-3xl font-bold text-blue-400">{number}</h3>
      <p className="text-gray-400">{label}</p>
    </div>
  );
};
