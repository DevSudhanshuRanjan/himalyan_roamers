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
      Landour
    </h1>
  </div>
);

const Landour = () => {
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
              src={image.img30}
              alt="img1"
              className="w-full h-full object-cover"
            />
            <OverlayText />
          </SwiperSlide>

          <SwiperSlide className="relative">
            <img
              src={image.img35}
              alt="img2"
              className="w-full h-full object-cover"
            />
            <OverlayText />
          </SwiperSlide>

          <SwiperSlide className="relative">
            <img
              src={image.img37}
              alt="img3"
              className="w-full h-full object-cover"
            />
            <OverlayText />
          </SwiperSlide>

          <SwiperSlide className="relative">
            <img
              src={image.img28}
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
              <img src={image.img28} alt="img1" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img29} alt="img2" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img30} alt="img3" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img31} alt="img4" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="sm:mt-0 mt-6 desc text-2xl sm:text-3xl font-[Caveat] text-center">
            Perched above the bustling streets of Mussoorie, Landour welcomed us
            with its tranquil charm and colonial-era cottages. As we strolled
            through the narrow, winding lanes, the fresh mountain air, infused
            with the scent of pine and deodar, felt rejuvenating. Unlike the
            touristy rush of Mussoorie, Landour had a slow, poetic rhythm that
            encouraged us to pause and take in the serenity. The absence of
            traffic and the soft whispers of the wind made it feel like a hidden
            paradise, untouched by time, where every turn revealed a story from
            the past.
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
              <img src={image.img31} alt="img4" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img32} alt="img5" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img33} alt="img6" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img34} alt="img7" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="order-2 sm:order-1 col-span-2 flex items-center">
          <p className="sm:mt-0 mt-6 desc text-2xl sm:text-3xl font-[Caveat] text-center">
            Our first stop was the iconic Char Dukan, a set of old-world cafés
            known for their hearty breakfasts and warm hospitality. We settled
            into a cozy corner, indulging in crispy bun omelets and fluffy
            pancakes, while the soothing mist rolled over the hills. The gentle
            chatter of fellow travelers, mixed with the distant sound of birds,
            added to the charm of the place. Sipping on ginger lemon tea, we
            watched the morning unfold in slow motion, a luxury often lost in
            our daily lives. It was the perfect place to relax, unwind, and soak
            in the rustic beauty of Landour.
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
              <img src={image.img35} alt="img8" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img36} alt="img9" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img37} alt="img10" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img35} alt="img11" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="sm:mt-0 mt-6 desc text-2xl sm:text-3xl font-[Caveat] text-center">
            Seeking adventure, we hiked up to Lal Tibba, the highest point in
            Mussoorie, where a breathtaking panorama of the Himalayas awaited
            us. The peaks stood tall and proud, partially veiled by passing
            clouds, creating an ethereal sight. As the sun began its descent,
            the sky transformed into a masterpiece of fiery orange, pink, and
            purple hues. Standing there, engulfed in the stillness of nature, we
            felt a deep sense of peace. The mountains, ancient and unchanging,
            whispered stories of time and eternity, making us feel both
            insignificant and infinite at once.
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
              <img src={image.img28} alt="img28" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img30} alt="img30" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img32} alt="img32" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="order-2 sm:order-1 col-span-2 flex items-center">
          <p className="sm:mt-0 mt-6 desc text-2xl sm:text-3xl font-[Caveat] text-center">
            While we were there, we met two little girls, probably around 5-6
            years old. They weren’t from well-off families, yet their smiles and
            innocence radiated pure joy. Seeing them reminded us that happiness
            isn’t bound by material wealth; rather, it lies in appreciating
            life’s simple moments. Their carefree laughter and enthusiasm to
            interact with us left a deep impact on our hearts. It was a
            beautiful reminder of how children find joy in the smallest of
            things, something we often forget as we grow older.
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
              <img src={image.img34} alt="img34" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img36} alt="img36" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img37} alt="img37" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img32} alt="img23" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="sm:mt-0 mt-6 desc text-2xl sm:text-3xl font-[Caveat] text-center">
            As the night settled in, we wandered through Sisters Bazaar, a
            charming stretch lined with old shops selling handmade jams, locally
            crafted woolens, and books that carried the essence of the hills.
            The soft strumming of a guitar from a nearby café blended seamlessly
            with the cool mountain breeze, making the atmosphere almost
            dreamlike. We picked up a few souvenirs, hoping to take a piece of
            Landour’s magic back with us. With hearts full of contentment, we
            left this enchanting hilltop retreat, knowing we would return to its
            timeless embrace one day.{" "}
          </p>
        </div>
      </div>
      {/* part 5 ends */}
    </div>
  );
};

export default Landour;
