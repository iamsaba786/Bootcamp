import React from "react";
import Hero from "../components/Hero";
import IntroVideo from "../components/IntroVideo";
import Syllabus from "../components/Syllabus";
import WhatYoullStudy from "../components/WhatYoullStudy";
import RealExperience from "../components/RealExperience";
import WhyBootcamp from "../components/WhyBootcamp";
import BootcampScrollVideo from "../components/BootcampScrollVideo";
import ChooseYourStyle from "../components/ChooseYourStyle";
import TestimonialsRing from "../components/TestimonialsRing";
import MentorsSection from "../components/MentorsSection";
import CertificateSection from "../components/CertificationSection";
import BootcampCountdown from "../components/BootcampCountdown";
import PricingSection from "../components/PricingSection";
import ContactFormSection from "../components/ContactFormSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import GrowthShowcase from "../components/GrowthShowcase";
import ZLast from "../components/ZLast";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <IntroVideo />
      <Syllabus />
      <ZLast />
      <WhatYoullStudy />
      <RealExperience />
      <WhyBootcamp />
      <BootcampScrollVideo />
      <ChooseYourStyle />
      <TestimonialsRing />
      <MentorsSection />
      <CertificateSection />
      <GrowthShowcase />
      <BootcampCountdown />
      <PricingSection />
      <ContactFormSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default HomePage;
