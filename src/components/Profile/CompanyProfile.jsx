export default function () {
  return <div className="h-85vh grid grid-cols-3 grid-rows-2 gap-2">

    <section className="bg-red-500 w-30 h-30"></section>
    <section className="bg-blue-500 w-30 h-30"></section>
    <section className="bg-gray-500 w-30 h-30"></section>
    <section className="bg-green-500 w-30 h-30"></section>
    <section className="bg-black w-30 h-30 col-start-3 col-end-3 row-start-1 row-end-3"></section>
  </div>;
}