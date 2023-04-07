"use client";
export default function Button({ children, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="hover:scale-110 shadow-lg px-4 py-3 bg-indigo-700 hover:bg-whiteSmoke hover:text-indigo-700 text-whiteSmoke text-sm sm:text-md font-mono rounded-lg gradient"
      >
        {children}
      </button>
    </div>
  );
}
