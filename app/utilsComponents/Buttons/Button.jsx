"use client";
export default function Button({ children, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="hover:scale-105 shadow-lg mr-1 px-3 py-2 bg-magenta hover:bg-indigo-700 text-white text-sm md:text-md font-jetbrains rounded-lg gradient"
      >
        {children}
      </button>
    </div>
  );
}
