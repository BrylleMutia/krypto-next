import React from "react";

type ButtonProps = {
   styles: string;
   text: string;
   adaptive?: boolean;
   type?: "button" | "submit" | "reset" | undefined;
};

const Button = ({
   styles,
   text,
   adaptive = true,
   type = "button",
}: ButtonProps) => {
   return (
      <button
         className={`font-outfit font-semibold rounded-full tracking-wider uppercase px-6 py-2 hover:bg-accent transition-all ${
            adaptive && "md:px-12 md:py-3.5 text-button"
         } ${styles}`}
         type={type}
      >
         {text}
      </button>
   );
};

export default Button;
