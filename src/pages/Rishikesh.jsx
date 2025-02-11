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
      Rishikesh
    </h1>
  </div>
);

const Home = () => {
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
              src={image.img9}
              alt="img1"
              className="w-full h-full object-cover"
            />
            <OverlayText />
          </SwiperSlide>

          <SwiperSlide className="relative">
            <img
              src={image.img19}
              alt="img2"
              className="w-full h-full object-cover"
            />
            <OverlayText />
          </SwiperSlide>

          <SwiperSlide className="relative">
            <img
              src={image.img16}
              alt="img3"
              className="w-full h-full object-cover"
            />
            <OverlayText />
          </SwiperSlide>

          <SwiperSlide className="relative">
            <img
              src={image.img15}
              alt="img4"
              className="w-full h-full object-cover"
            />
            <OverlayText />
          </SwiperSlide>

          <SwiperSlide className="relative">
            <img
              src={image.img11}
              alt="img5"
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
              <img src={image.img1} alt="img1" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img2} alt="img2" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img3} alt="img3" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img4} alt="img4" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="sm:mt-0 mt-6 desc text-2xl sm:text-3xl font-[Caveat] text-center">
            Our journey to Rishikesh for our EVS project began early in the
            morning, right at 6 AM from our college hostel. The excitement was
            palpable as we made our way to Dehradun ISBT, where we caught a bus
            to Rishikesh. Upon reaching the bus stand, we decided to rent a
            scooty to explore the region more freely. The cool morning breeze,
            combined with the fresh air of the hills, set the perfect tone for
            our adventure. As we rode through the winding roads, the scenic
            beauty around us was mesmerizing, reminding us how important it is
            to preserve and respect the natural ecosystem.
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
              <img src={image.img4} alt="img4" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img5} alt="img5" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img6} alt="img6" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img7} alt="img7" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="order-2 sm:order-1 col-span-2 flex items-center">
          <p className="sm:mt-0 mt-6 desc text-2xl sm:text-3xl font-[Caveat] text-center">
            Our first destination was a hidden waterfall, nestled deep in a
            remote area. The path leading to it was less traveled, with very few
            people around, which made the experience even more special. The
            tranquility of the place was unmatched, and the only sounds we could
            hear were the chirping of birds and the gentle rush of water
            cascading down the rocks. Nearby, we discovered a small temple
            dedicated to Lord Shiva. It stood as a testament to the deep
            spiritual connection between humans and nature. The peace we felt
            there was surreal, reinforcing how such untouched parts of our
            environment play a crucial role in maintaining ecological balance.
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
              <img src={image.img8} alt="img8" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img9} alt="img9" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img10} alt="img10" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img11} alt="img11" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img12} alt="img12" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img13} alt="img13" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="sm:mt-0 mt-6 desc text-2xl sm:text-3xl font-[Caveat] text-center">
            After spending some time at the waterfall, we decided to venture
            further. Traveling nearly 20-25 km from Rishikesh, we found a small
            eatery where we had lunch. As we interacted with the locals, we
            learned about another hidden gem, a serene riverside spot away from
            the crowds. Upon reaching, we were spellbound by the crystal-clear
            waters of the Ganga. This place was like a sanctuary, allowing us to
            truly connect with nature. Sitting on the rocks with our feet dipped
            in the cold water, we absorbed the beauty around us. The sound of
            the flowing river, the whispering winds, and the majestic mountains
            created a perfect symphony of nature. The availability of adventure
            sports like river rafting, bungee jumping, and ziplining added an
            element of thrill, but we were more drawn towards the peaceful side
            of this place, simply admiring the untouched beauty of the
            ecosystem.
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
              <img src={image.img15} alt="img15" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img16} alt="img16" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img17} alt="img17" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img18} alt="img18" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img19} alt="img19" />
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
              <img src={image.img20} alt="img20" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img21} alt="img21" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img22} alt="img22" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img23} alt="img23" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="sm:mt-0 mt-6 desc text-2xl sm:text-3xl font-[Caveat] text-center">
            As the day started to fade, we headed back to the Rishikesh ghats.
            Bowing down to Ganga Maa, we took a moment to reflect on the
            serenity we had experienced throughout the day. The ghats, bustling
            with devotees and sadhus, radiated an entirely different energy,
            reinforcing the spiritual and ecological significance of the river.
            Before leaving, we explored the local market, where we met an
            elderly woman selling bangles. Despite her struggles, she was
            working hard to sustain herself, and her resilience was truly
            inspiring. We bought a few souvenirs, including miniature temples
            and handmade bags, as mementos of this unforgettable journey.{" "}
          </p>
        </div>
      </div>
      {/* part 5 ends */}

      {/* horizontal line start */}
      <div className="horizontal-line w-full flex justify-center p-6">
  <motion.div
    className="line w-3 sm:h-[40vh] h-[30vh] bg-gradient-to-t from-purple-400 to-purple-900 rounded-2xl"
    initial={{ opacity: 0, y: -100 }} // Initial state: hidden and above the screen
    whileInView={{ opacity: 1, y: 0 }} // Final state: fully visible and in its position
    transition={{ duration: 1 }} // Duration of the animation
    viewport={{ once: true }} // Animation happens only once when the element comes into view
  />
</div>
      {/* horizontal line end */}

      {/* part 6 starts */}
      <div className="grid grid-cols-1 sm:grid-cols-3 bg-white p-6 rounded-xl shadow-2xl">
        <div className="order-1 sm:order-2">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide className="mySwiper-slide">
              <img src={image.grp_photo} alt="grp_photo" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img24} alt="img24" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img25} alt="img25" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img26} alt="img26" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slide">
              <img src={image.img27} alt="img27" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="order-2 sm:order-1 col-span-2 flex items-center">
          <p className="sm:mt-0 mt-6 desc text-2xl sm:text-3xl font-[Caveat] text-center">
            As the day started to fade, we headed back to the Rishikesh ghats.
            Bowing down to Ganga Maa, we took a moment to reflect on the
            serenity we had experienced throughout the day. The ghats, bustling
            with devotees and sadhus, radiated an entirely different energy,
            reinforcing the spiritual and ecological significance of the river.
            Before leaving, we explored the local market, where we met an
            elderly woman selling bangles. Despite her struggles, she was
            working hard to sustain herself, and her resilience was truly
            inspiring. We bought a few souvenirs, including miniature temples
            and handmade bags, as mementos of this unforgettable journey.
          </p>
        </div>
      </div>
      {/* part 6 ends */}
    </div>
  );
};

export default Home;
