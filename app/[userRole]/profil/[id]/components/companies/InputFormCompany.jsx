export default function InputFormCompany({
  widthMobile,
  widthDesktop,
  value,
  handleChange,
  type,
  placeHolder,
  height,
}) {
  return (
    <div>
      <label
        htmlFor="description"
        className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <input
          type={type}
          name={placeHolder}
          onChange={handleChange}
          value={value}
          placeholder={placeHolder}
          className={`peer h-8 w-[30vw] border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-md`}
        />
        <span className="absolute start-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
          {placeHolder}
        </span>
      </label>
    </div>
  );
}
