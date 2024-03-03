import { Company, Highlights, Link, Testimonial } from "./types";

export const NAVLINKS: Link[] = [
   {
      title: "NFTs",
      path: "#nfts",
   },
   {
      title: "Pricing",
      path: "#pricing",
   },
   {
      title: "Contact",
      path: "#contact",
   },
   {
      title: "About",
      path: "#about",
   },
];

export const COMPANIES: Company[] = [
   {
      imgSrc: "https://i.ibb.co/YjtYPPN/logo4.png",
      alt: "Featured company 4",
   },
   {
      imgSrc: "https://i.ibb.co/JtJj2N8/logo3.png",
      alt: "Featured company 3",
   },
   {
      imgSrc: "https://i.ibb.co/z867X3f/logo2.png",
      alt: "Featured company 2",
   },
   {
      imgSrc: "https://i.ibb.co/ck0wT61/logo1.png",
      alt: "Featured company 1",
   },
];

export const HIGHLIGHTS: Highlights[] = [
   {
      buttonText: "view our pricing",
      header: "built-in analytics to track your NFTs",
      imgAlign: "right",
      imgSrc: "https://i.ibb.co/Cw6QZpC/analytics.png",
      paragraph:
         "Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.",
      title: "Analytics",
   },
   {
      buttonText: "Download on ios",
      header: "browse NFTs from your smartphone",
      imgAlign: "left",
      imgSrc: "https://i.ibb.co/HdV8K5g/download.png",
      paragraph:
         "Our Krypto app is the easiest way to keep track of your assets when you’re on the go.",
      title: "Get our app",
   },
];

export const TESTIMONIALS: Testimonial[] = [
   {
      feedback:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
      imgSrc: "https://i.ibb.co/88cXZSp/client2.png",
      name: "Tony Stark",
   },
   {
      feedback:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
      imgSrc: "https://i.ibb.co/qCNfbvd/client3.png",
      name: "Nat Romanoff",
   },
   {
      feedback:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
      imgSrc: "https://i.ibb.co/4T4YF3p/client1.png",
      name: "Carol Danvers",
   },
];
