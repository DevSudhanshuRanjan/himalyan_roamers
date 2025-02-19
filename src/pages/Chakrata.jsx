import React, { useRef, useState } from "react";
import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { Pagination, Autoplay, EffectCards } from "swiper/modules";
import { motion } from "framer-motion"; // Importing framer motion
import image from "../assets/image.js";

// ✅ Common Overlay Component with Better Visibility
const OverlayText = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    <h1 className="text-white text-4xl md:text-9xl font-bold z-10 drop-shadow-xl font-[caveat]">
      Chakrata
    </h1>
  </div>
);

const Chakrata = () => {
  return (
    <div>
      {/* Image slider start */}
      <div className="relative w-full h-[70vh] sm:h-[90vh] overflow-hidden">
        <Swiper
          pagination={{ dynamicBullets: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full h-full"
        >
          <SwiperSlide className="relative">
            <img
              src={image.img38}
              alt="img1"
              className="w-full h-full object-cover"
            />
            <OverlayText />
          </SwiperSlide>

          <SwiperSlide className="relative">
            <img
              src={image.img39}
              alt="img2"
              className="w-full h-full object-cover"
            />
            <OverlayText />
          </SwiperSlide>

          <SwiperSlide className="relative">
            <img
              src={image.img40}
              alt="img3"
              className="w-full h-full object-cover"
            />
            <OverlayText />
          </SwiperSlide>

          <SwiperSlide className="relative">
            <img
              src={image.img45}
              alt="img4"
              className="w-full h-full object-cover"
            />
            <OverlayText />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Image slider ends */}

      {/* horizontal line start */}
      <div className="horizontal-line w-full flex justify-center p-6">
        <motion.div
          className="line w-3 sm:h-[40vh] h-[30vh] bg-gradient-to-t from-indigo-400 to-cyan-400 rounded-2xl"
          initial={{ opacity: 0, y: -100 }} // Initial state: hidden and above the screen
          whileInView={{ opacity: 1, y: 0 }} // Final state: fully visible and in its position
          transition={{ duration: 1 }} // Duration of the animation
          viewport={{ once: true }} // Animation happens only once when the element comes into view
        />
      </div>
      {/* horizontal line end */}

      {/* part 1 starts */}
      <div className="grid grid-cols-1 sm:grid-cols-3 bg-white p-6 rounded-xl shadow-2xl">
        <div className="col-span-1">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img2} alt="img34" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img7} alt="img36" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img33} alt="img37" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img42} alt="img23" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="sm:mt-0 mt-6 desc text-2xl sm:text-3xl font-[Caveat] text-center">
          Chakrata is a peaceful hill station in the Dehradun district of Uttarakhand, India. It sits at a height of about 2,118 meters and is surrounded by dense forests of deodar, oak, and rhododendron trees. The town is known for its quiet and natural beauty, making it a great place for relaxation and adventure.
          </p>
        </div>
      </div>
      {/* part 1 ends */}

      {/* horizontal line start */}
      <div className="horizontal-line w-full flex justify-center p-6">
        <motion.div
          className="line w-3 sm:h-[40vh] h-[30vh] bg-gradient-to-t from-rose-400 to-red-400 rounded-2xl"
          initial={{ opacity: 0, y: -100 }} // Initial state: hidden and above the screen
          whileInView={{ opacity: 1, y: 0 }} // Final state: fully visible and in its position
          transition={{ duration: 1 }} // Duration of the animation
          viewport={{ once: true }} // Animation happens only once when the element comes into view
        />
      </div>
      {/* horizontal line end */}

      {/* part 2 starts */}
      <div className="grid grid-cols-1 sm:grid-cols-3 bg-white p-6 rounded-xl shadow-2xl">
        <div className="order-1 sm:order-2">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img38} alt="img4" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img39} alt="img5" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img45} alt="img6" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img2} alt="img7" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="order-2 sm:order-1 col-span-2 flex items-center">
          <p className="sm:mt-0 mt-6 desc text-2xl sm:text-3xl font-[Caveat] text-center">
          The area has a rugged landscape with rolling hills and deep valleys. It is located between the Tons and Yamuna rivers and is part of the Garhwal Himalayas. Visitors can enjoy stunning views of snow-covered peaks and green meadows. The fresh mountain air and scenic surroundings make Chakrata a perfect getaway.
          </p>
        </div>
      </div>
      {/* part 2 ends */}

      {/* horizontal line start */}
      <div className="horizontal-line w-full flex justify-center p-6">
        <motion.div
          className="line w-3 sm:h-[40vh] h-[30vh] bg-gradient-to-t from-lime-400 to-lime-400 rounded-2xl"
          initial={{ opacity: 0, y: -100 }} // Initial state: hidden and above the screen
          whileInView={{ opacity: 1, y: 0 }} // Final state: fully visible and in its position
          transition={{ duration: 1 }} // Duration of the animation
          viewport={{ once: true }} // Animation happens only once when the element comes into view
        />
      </div>
      {/* horizontal line end */}

      {/* part 3 starts */}
      <div className="grid grid-cols-1 sm:grid-cols-3 bg-white p-6 rounded-xl shadow-2xl">
        <div className="col-span-1">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img41} alt="img8" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img42} alt="img9" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img43} alt="img10" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img44} alt="img11" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="sm:mt-0 mt-6 desc text-2xl sm:text-3xl font-[Caveat] text-center">
          Moila Danda, also called Moila Top, is another stunning location near Chakrata. It is an alpine meadow at about 2,759 meters above sea level and offers amazing views of the Himalayas. The area is surrounded by thick deodar forests, making it a great place for trekking and enjoying nature.
          </p>
        </div>
      </div>
      {/* part 3 ends */}

      {/* horizontal line start */}
      <div className="horizontal-line w-full flex justify-center p-6">
        <motion.div
          className="line w-3 sm:h-[40vh] h-[30vh] bg-gradient-to-t from-fuchsia-600 to-purple-400 rounded-2xl"
          initial={{ opacity: 0, y: -100 }} // Initial state: hidden and above the screen
          whileInView={{ opacity: 1, y: 0 }} // Final state: fully visible and in its position
          transition={{ duration: 1 }} // Duration of the animation
          viewport={{ once: true }} // Animation happens only once when the element comes into view
        />
      </div>
      {/* horizontal line end */}

      {/* part 4 starts */}
      <div className="grid grid-cols-1 sm:grid-cols-3 bg-white p-6 rounded-xl shadow-2xl">
        <div className="order-1 sm:order-2">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img29} alt="img28" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img38} alt="img30" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="order-2 sm:order-1 col-span-2 flex items-center">
          <p className="sm:mt-0 mt-6 desc text-2xl sm:text-3xl font-[Caveat] text-center">
          Another exciting place to explore is the Budher Caves, located near Moila Danda. These limestone caves are believed to be millions of years old. They are perfect for adventure lovers who enjoy exploring dark and mysterious underground spaces. The caves add to the geological wonders of the Chakrata region.
          </p>
        </div>
      </div>
      {/* part 4 ends */}

      {/* horizontal line start */}
      <div className="horizontal-line w-full flex justify-center p-6">
        <motion.div
          className="line w-3 sm:h-[40vh] h-[30vh] bg-gradient-to-t from-teal-400 to-yellow-200 rounded-2xl"
          initial={{ opacity: 0, y: -100 }} // Initial state: hidden and above the screen
          whileInView={{ opacity: 1, y: 0 }} // Final state: fully visible and in its position
          transition={{ duration: 1 }} // Duration of the animation
          viewport={{ once: true }} // Animation happens only once when the element comes into view
        />
      </div>
      {/* horizontal line end */}

      {/* part 5 starts */}
      <div className="grid grid-cols-1 sm:grid-cols-3 bg-white p-6 rounded-xl shadow-2xl">
        <div className="col-span-1">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img36} alt="img34" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img38} alt="img36" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img39} alt="img37" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img43} alt="img23" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="sm:mt-0 mt-6 desc text-2xl sm:text-3xl font-[Caveat] text-center">
          The rich biodiversity of Chakrata includes forests teeming with deodar, oak, and rhododendron trees. The area is also a haven for bird watchers, with species like the black-headed jay and oriental turtle dove commonly spotted.
          </p>
        </div>
      </div>
      {/* part 5 ends */}
    </div>
  );
};

export default Chakrata;
