"use client";
export default function Button({ children, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="hover:scale-110 shadow-lg mr-1 px-1 py-1 bg-indigo-700 hover:bg-whiteSmoke hover:text-indigo-700 text-whiteSmoke text-sm md:text-md font-jetbrains rounded-lg gradient"
      >
        {children}
      </button>
    </div>
  );
}
