import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

import { fakeBlogs } from "../../fakeBlogs";
import ShortBlog from "./ShortBlog";
import NextArrow from "../../assets/svg/next-arrow.svg";
import PrevArrow from "../../assets/svg/prev-arrow.svg";

import "swiper/css";

type SimiliarBlogsProps = {
  chosenBlog: BlogType;
};

const SLIDES_PER_VIEW = 3;

const SimiliarBlogs = ({ chosenBlog }: SimiliarBlogsProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [disableButton, setDisableButton] = useState({
    first: true,
    second: false,
  });

  const filteredBlogs = fakeBlogs.data.filter(
    (fakeBlog) =>
      fakeBlog.id !== chosenBlog.id &&
      fakeBlog.categories.some((fakeCategory) =>
        chosenBlog.categories.some(
          (chosenCategory) => chosenCategory.id === fakeCategory.id
        )
      )
  );

  if(filteredBlogs.length === 0) return null

  const handleButtonDisable = (swiper: SwiperType) => {
    const lastIndex = filteredBlogs.length - SLIDES_PER_VIEW;

    if (swiper.realIndex === 0) {
      setDisableButton({ first: true, second: false });
    } else if (swiper.realIndex === lastIndex) {
      setDisableButton({ first: false, second: true });
    } else {
      setDisableButton({ first: false, second: false });
    }
  };

  const handleSlidePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleSlideNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="def-container flex flex-col gap-y-[40px] mt-[100px]">
      <div className="flex justify-between">
        <h1 className="text-[#1A1A1F] text-[32px] leading-[40px] font-bold">
          მსგავსი სტატიები
        </h1>
        <div className="flex gap-x-[24px] ">
          <button
            className={`${
              disableButton.first ? "bg-[#E4E3EB]" : "bg-[#5D37F3]"
            } w-[44px] h-[44px]  rounded-[24px] flex justify-center items-center`}
            onClick={handleSlidePrev}
            disabled={disableButton.first}
          >
            <img src={PrevArrow} alt="Prev" className="w-[30px]" />
          </button>
          <button
            className={`${
              disableButton.second ? "bg-[#E4E3EB]" : "bg-[#5D37F3]"
            } w-[44px] h-[44px]  rounded-[24px] flex justify-center items-center`}
            onClick={handleSlideNext}
            disabled={disableButton.second}
          >
            <img src={NextArrow} alt="Next" className="w-[30px]" />
          </button>
        </div>
      </div>

      <div>
        <Swiper
          spaceBetween={32}
          slidesPerView={SLIDES_PER_VIEW}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleButtonDisable}
          ref={swiperRef as any}
        >
          {filteredBlogs.map((fakeBlog) => (
            <SwiperSlide key={fakeBlog.id}>
              <ShortBlog blogInfo={fakeBlog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SimiliarBlogs;
