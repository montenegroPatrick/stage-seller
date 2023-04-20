"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import img1 from "@/public/chien-smoking.jpg";
import img2 from "@/public/company.jpeg";
const images = [img1, img2];
export default function Slider() {
  console.log(img1);

  const [sliderRef] = useKeenSlider();
  return (
    <>
      <div className=" ">
        <div ref={sliderRef} className="keen-slider  ">
          <Image
            width={300}
            height={300}
            className="keen-slider__slide flex justify-center items-center max-h-screen "
            src={img1}
          />
          <Image
            width={300}
            height={300}
            className="keen-slider__slide flex justify-center items-center max-h-screen "
            src={img2}
          />
        </div>
      </div>
    </>
  );
}
