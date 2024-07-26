export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import ClientsCarousel from "@/components/ui/ClientsCarousel";
import ContactForm from "@/components/ContactForm";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <ClientsCarousel /> */}
      {/* <BusinessCategories /> */}
      <LargeTestimonial />
      <Cta />
      <FeaturesPlanet />
      <Contact/>
   
    </>
  );
}
