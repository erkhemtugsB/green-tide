// src/components/CleaningSpinner.tsx
import { FaBroom } from "react-icons/fa";
import "@/styles/spinner.css"; // optional for custom CSS

const CleaningSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4 bg-white">
      <FaBroom className="animate-spin text-4xl text-blue-500" />
      <p className="text-gray-600 font-medium">Cleaning up the mess...</p>
    </div>
  );
};

export default CleaningSpinner;
