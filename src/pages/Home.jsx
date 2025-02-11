import React from "react";
import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion"; // Importing framer motion
import image from "../assets/image.js";

const OverlayText = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    <h1 className="text-white text-4xl md:text-9xl font-bold z-10 drop-shadow-xl font-[caveat]">
      Himalayan Roamers
    </h1>
  </div>
);

const Home = () => {
  return (
    <div>
      {/* Image slider start */}
      <div className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden">
        <Swiper
          pagination={{ dynamicBullets: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full h-full"
        >
          <SwiperSlide className="relative">
            <img
              src={image.grp_photo}
              alt="img2"
              className="w-full h-full object-cover"
            />
            <OverlayText />
          </SwiperSlide>

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

      {/* Introduction Section with Animation */}
      <motion.div
        className="intro-div flex flex-col justify-center items-center m-5 bg-white p-6 rounded-xl shadow-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-2xl md:text-5xl font-bold font-[Montserrat] mt-4 text-gray-800"
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Explore the Mountains with Himalayan Roamers
        </motion.h1>
        <motion.h2
          className="text-lg md:text-2xl font-semibold font-[Poppins] mt-4 text-gray-700"
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Unveiling the hidden gems of the mountains - one journey at a time.
        </motion.h2>
        <motion.p
          className="text-sm md:text-lg font-semibold font-[Poppins] mt-4 text-center px-auto w-[70%] text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Nestled in the heart of the mighty Himalayas, every trail has a story,
          every peak holds a secret, and every journey is an adventure waiting
          to unfold. At Himalayan Roamers, we don’t just travel—we explore,
          experience, and embrace the raw beauty of nature. From hidden
          waterfalls to untouched trails, we bring you real, unfiltered travel
          stories and guides to help you embark on your next unforgettable
          journey. Join us as we wander beyond the ordinary and uncover the true
          essence of the mountains.
        </motion.p>
      </motion.div>

      {/* Meet the Team Section */}
      <motion.div
        className="flex flex-col justify-center items-center m-5 bg-white p-6 rounded-xl shadow-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl font-bold font-[Caveat] text-gray-800 mb-4"
          initial={{ y: -100 }}
          whileInView={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Meet the Team Behind Himalayan Roamers
        </motion.h2>

        <div className="para-img sm:grid sm:grid-flow-col sm:grid-cols-2 gap-6">
          <motion.div
            className="img col-span-1 rounded-2xl overflow-hidden shadow-lg"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} // Animation happens once when the div comes into view
          >
            <img
              src={image.grp_photo}
              alt="group-photo"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="mt-7 sm:mt-0 para col-span-1 flex flex-col justify-center items-center">
            <p className="w-full text-xl text-gray-700 leading-relaxed font-[Poppins]">
              Here’s the squad that makes every journey unforgettable! At the
              front in the
              <span className="font-semibold text-yellow-500">
                {" "}
                red and white jacket
              </span>{" "}
              is
              <span className="font-semibold text-yellow-500"> Yash Yadav</span>
              , capturing the best moments through his lens. To his left,
              wearing a{" "}
              <span className="font-semibold text-yellow-500">grey hoodie</span>
              , is
              <span className="font-semibold text-yellow-500">
                {" "}
                Sudhanshu Ranjan
              </span>
              , the tech mastermind behind our adventures. Behind him, in a
              <span className="font-semibold text-yellow-500">
                {" "}
                black jacket
              </span>
              , stands
              <span className="font-semibold text-yellow-500">
                {" "}
                Himanshu Arya
              </span>
              , always ready to explore offbeat trails. Right in the middle at
              the back is{" "}
              <span className="font-semibold text-yellow-500">Aman</span>, the
              group's travel strategist, ensuring every trip is well-planned. On
              the right, shielding his eyes from the sun, is
              <span className="font-semibold text-yellow-500">
                {" "}
                Rishi Tripathi
              </span>
              , our fearless and chill explorer. Together, we are
              <span className="font-semibold text-yellow-500">
                {" "}
                Himalayan Roamers
              </span>
              , on a mission to discover the hidden gems of the mountains and
              share our experiences with the world! 🏔️✨
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
