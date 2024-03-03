import React from "react";
import styles from "../styles";
import { COMPANIES } from "@/constants";
import Image from "next/image";

const Featured = () => (
   <section className="w-full">
      <h2 className={`${styles.heading2} mb-3`}>Featured on</h2>
      <div className="bg-featured rounded-lg">
         <ul className="flex flex-1 flex-wrap align-center justify-center gap-5 object-contain py-5">
            {COMPANIES.map((company) => (
               <li className="my-auto min-w-[200px]" key={company.alt}>
                  <Image
                     src={company.imgSrc}
                     alt={company.alt}
                     className="mx-auto"
                     width={70}
                     height={50}
                  />
               </li>
            ))}
         </ul>
      </div>
   </section>
);

export default Featured;
