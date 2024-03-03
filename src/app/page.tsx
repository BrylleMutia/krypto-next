import Navbar from "@/components/Navbar";
import styles from "@/styles";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import { HIGHLIGHTS } from "@/constants";
import Highlights from "@/components/Highlights";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
   return (
      <div className="w-full">
         <div className="xl:max-w-[1280px] w-full p-2 md:px-0 mx-auto">
            <Navbar />
         </div>

         <div className="w-full">
            <div
               className={`${styles.container} mx-auto px-[2rem] sm:px-10 mb-20`}
            >
               <Hero />
            </div>
         </div>

         <div className="xl:max-w-[1280px] w-full mx-auto px-[2rem] sm:px-10 mb-20">
            <div className="mb-[7rem]">
               <Featured />
            </div>

            <div id="nfts">
               {HIGHLIGHTS.map((highlight, index) => (
                  <div className="mb-[7rem]" key={index}>
                     <Highlights key={index} {...highlight} />
                  </div>
               ))}
            </div>

            <div id="about" className="mb-[5rem]">
               <Testimonials />
            </div>
            <div className="mb-[12rem]" id="pricing">
               <CallToAction />
            </div>

            <div id="contact">
               <Footer />
            </div>
         </div>
      </div>
   );
}
