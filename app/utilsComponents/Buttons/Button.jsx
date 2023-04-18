"use client";
export default function Button({ children, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="hover:scale-105 shadow-lg mr-1 px-3 py-2 bg-blue-700 hover:bg-indigo-700 text-white text-sm md:text-md font-chivo rounded-lg gradient"
      >
        {children}
      </button>
    </div>
  );
}
