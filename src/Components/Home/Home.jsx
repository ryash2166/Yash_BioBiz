import React from "react";
import CustomNavbar from "../Navbar/Navbar";
import MainSection from "../MainSection/MainSection";
import IndiaUpdate from "../Common/IndiaUpdate";
import OtherSection from "../OtherSection/OtherSection";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <CustomNavbar />
      <main className="">
        {/* Content */}
        <div className="w-7xl">
          <video
            preload="none"
            muted
            autoPlay
            playsInline
            loop="loop"
            className="w-full object-cover max-lg:hidden"
          >
            <source type="video/mp4" src="https://biobiz.in/2024/video.mp4" />
          </video>
          <video
            preload="none"
            muted
            autoPlay
            playsInline
            loop="loop"
            className="w-full object-cover lg:hidden"
          >
            <source
              type="video/mp4"
              src="https://biobiz.in/wp-content/uploads/2024/10/biobiz-mobile-video.mp4"
            />
          </video>
        </div>
        <div className="bg-[#d6d6d6] pt-5">
          <div className="max-w-screen-lg w-[80%] relative m-auto flex max-lg:block pb-4">
            <MainSection />
            <IndiaUpdate />
          </div>
          <div className="py-[54px] bg-[#e06100]">
            <OtherSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
