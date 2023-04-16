"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function Caroussel() {
  const options = {
    perPage: 2,
    arrows: false,
    pagination: false,
  };
  const users = [
    { icon: "blibli", text: "blabvla" },
    { icon: "blibli", text: "blabvla" },
    { icon: "blibli", text: "blabvla" },
    { icon: "blibli", text: "blabvla" },
  ];
  return (
    <div className="relative h-420 mt-30 overflow-x-hidden">
      <div className="absolute top-0 left-0 w-calc-125vw-plus-30px">
        <Splide options={options}>
          {users.map((slide) => (
            <SplideSlide>
              <div className="pl-30">
                <div className="flex flex-col justify-center items-start h-420 p-60 md:p-40 rounded-10 bg-white">
                  <span>{slide.icon}</span>
                  <p>{slide.text}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}
