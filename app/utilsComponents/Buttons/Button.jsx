"use client";
export default function Button({ children, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="mr-1 px-3 py-1 text-white text-sm md:text-md uppercase bg-blackNext rounded-full hover:bg-white hover:text-blackNext hover:border hover:border-blackNext "
      >
        {children}
      </button>
    </div>
  );
}
