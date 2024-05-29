import { useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Home.css";
import SingleHouse from "../../components/SingleHouse/SingleHouse";

// eslint-disable-next-line react/prop-types
const FeaturedHouse = ({ data }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="lg:px-20 px-5 my-20">
      <div className="flex justify-between items-end">
        <div>
          <p className="text-third">Our Recommendation</p>
          <h2 className="text-3xl font-bold">Featured House</h2>
        </div>
        <div className="flex gap-5">
          <div
            ref={navigationPrevRef}
            className="swiper-button-prev text-base text-xl bg-primary h-[52px] w-[60px] rounded-full flex justify-center items-center"
          >
            <IoIosArrowBack />
          </div>
          <div
            ref={navigationNextRef}
            className="swiper-button-next text-base text-xl bg-primary h-[52px] w-[60px] rounded-full flex justify-center items-center"
          >
            <IoIosArrowForward />
          </div>
        </div>
      </div>

      <div className="my-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          speed={1000}
          effect={"slide"}
          grabCursor={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {
            // eslint-disable-next-line react/prop-types
            data.reverse().slice(0, 9).map((house) => (
              <>
                <SwiperSlide className="w-[340px] h-[552px]">
                  <SingleHouse key={house.id} house={house} />
                </SwiperSlide>
              </>
            ))
          }

         
        
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedHouse;
