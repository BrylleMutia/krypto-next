import React from "react";
import styles, { layout } from "../styles";
import Button from "./Button";
import Image from "next/image";
import type { Highlights } from "@/constants/types";

const Highlights = ({
   title,
   header,
   paragraph,
   imgSrc,
   imgAlign,
   buttonText,
}: Highlights) => {
   return (
      <section>
         <div
            className={`${layout.flexCenter} ${
               imgAlign === "left" && "flex-row-reverse"
            } gap-10 flex-wrap`}
         >
            <Image src={imgSrc} alt="title" width={400} height={400} />
            <div className="flex flex-col items-start gap-7 lg:w-[50%] w-[100%]">
               <h2 className={`${styles.heading2} text-accent`}>{title}</h2>
               <h1 className={`${styles.heading1} capitalize`}>{header}</h1>
               <p className="text-p">{paragraph}</p>
               <Button text={buttonText} styles="bg-secondary" />
            </div>
         </div>
      </section>
   );
};

export default Highlights;
