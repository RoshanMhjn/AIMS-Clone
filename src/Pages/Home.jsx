import React from "react";

import { Link } from "react-router-dom";
import Card from "../Components/Card";
import preschool from "../assets/Images/preschool.jpg";
import school from "../assets/Images/school.jpg";
import highschool from "../assets/Images/highschool.jpg";
import college from "../assets/Images/college.jpg";
import Carousel from "../Components/Carousel";
import Notices from "../Components/Notices";

const Home = () => {
  return (
    <div className="font-poppins ">
      <div className=" mt-12 hero-image h-screen bg-cover bg-center ">
        <div className="hero-text text-white text-center relative top-[40%] cursor-default">
          <h1 className="text-8xl font-bold mb-5">GET READY</h1>
          <h2 className="text-5xl font-medium">TO DISCOVER AIMS</h2>

          <Link to="/about-us" className="group">
            <button className="my-8 mx-4  border-4 p-3 w-52 font-semibold text-xl rounded-md hover:bg-gray-900 group-hover:scale-110 duration-200">
              About Us
            </button>
          </Link>

          <Link to="/contact-us" className="group">
            <button className="my-8 mx-4  border-4 p-3 w-52 font-semibold text-xl rounded-md hover:bg-gray-900 group-hover:scale-110 duration-200">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <section className="  mt-12 bg-slate-800 text-white h-96 flex justify-center items-center cursor-default px-24 pt-3 md:px-48 md:pt-4  lg:pt-6">
        <div className="text-section flex-col text-center">
          <p className="text-6xl font-bold mb-6">Excellence since 1992</p>
          <p className="leading-8 text-lg text-slate-400">
            Advanced International Model School(AIMS) Academy has
            differentiatred itself with a strong focus on leadership, moral and
            cultural values with a combination of academic rigor grounded on
            rationality
          </p>
        </div>
      </section>

      <section className=" cursor-default programs px-20 md:px-24 lg:px-28 mt-12 lg:h-[60vh] flex flex-col justify-center items-center">
        <p className="text-center text-5xl font-semibold">Our Programs</p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 mt-12 drop-shadow-xl">
          <Card src={preschool} title="Pre-School" />

          <Card src={school} title="Class 1-10" />

          <Card src={highschool} title="+2" />

          <Card src={college} title="BCA, BSW, BA & BBS" />
        </div>
      </section>

      <div>
        <Carousel autoSlide={true} />
      </div>

      <div className="notices h-[60vh] cursor-default">
        <p className="px-20 md:px-24 lg:px-28 text-4xl font-bold">
          Latest Notices and News
        </p>
        <div className=" mt-12 flex justify-center items-center px-20 md:px-24 lg:px-28 gap-10 lg:gap-28 md:gap-24 flex-col md:flex-row lg:flex-row drop-shadow-sm">
          <div className="border-2 h-[300px] text-left p-6 md:w-1/2 lg:w-1/2">
            <Notices
              type="Admissions"
              title="Admission open for +2, BCA, BSW, BBS, and BA"
              date="May 12"
              description="AIMS announces admission open for al Bachelor's Program."
              link="Continue reading"
            />
          </div>

          <div className="border-2 h-[300px] text-left p-6 md:w-1/2 lg:w-1/2">
            <Notices
              type="COVID-19"
              title="Find the latest class schedule."
              date="May 20"
              description="Download the latest class schedult."
              link="Continue reading"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
