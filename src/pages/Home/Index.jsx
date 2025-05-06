import React from "react";
import Hero from "../../components/home/Hero";
import About from "../../components/home/About";
import WhyChoooseUs from "../../components/home/WhyChoooseUs";
import Programs from "../../components/home/Programs";
import Impact from "../../components/home/Impact";
import Testimonials from "../../components/common/Testimonials";
import SubscribeNewsletter from "../../components/home/SubscribeNewsLetter";

const Home = () => {
  return (
    <div className=" text-white">
      <Hero />
      <About />
      <WhyChoooseUs />
      <Programs />
      <Impact />
      <Testimonials />
      <SubscribeNewsletter />
    </div>
  );
};

export default Home;
