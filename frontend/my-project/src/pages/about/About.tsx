import img_about01 from "../../assets/images/about/about_img01.jpg";
import img_about02 from "../../assets/images/about/about_img02.jpg";
import img_about03 from "../../assets/images/about/photo-1485230895905-ec40ba36b9bc.avif";
import img_about04 from "../../assets/images/about/photo-1560243563-062bfc001d68.avif";
import img_about05 from "../../assets/images/about/photo-2995231145006-ko402m3fnau4vs.avif";

import manager01 from "../../assets/images/about/about_manager01.jpg";
import manager02 from "../../assets/images/about/about_manager02.jpg";
import manager03 from "../../assets/images/about/about_manager03.jpg";
import { AboutUs } from "../../interfaces/interfaces";
import Header2 from "../../layout/header/Header2";
import Footer from "../../layout/footer/Footer";


const aboutUs: AboutUs[] = [
  {
    title: "FREE AND FAST DELIVERY",
    subTitle: "Free delivery for all orders over $140",
    icon: <i className="fa-solid fa-truck-fast text-xl text-white"></i>,
  },
  {
    title: "24/7 CUSTOMER SERVICE",
    subTitle: "Friendly 24/7 customer support",
    icon: <i className="fa-solid fa-headphones text-xl text-white"></i>,
  },
  {
    title: "MONEY BACK GUARANTEE",
    subTitle: "We reurn money within 30 days",
    icon: <i className="fa-solid fa-shield-halved text-xl text-white"></i>,
  },
];

const managerImages = [
  {
    id: 1,
    img: manager01,
    name: "Tom Cruise",
    positon: "Founder & Chairman",
  },
  {
    id: 2,
    img: manager02,
    name: "Emma Watson",
    positon: "Managing Director",
  },
  {
    id: 3,
    name: "Will Smith",
    img: manager03,
    positon: "Product Designer",
  },
];

const About = () => {
  return (
    <>
      <Header2/>
      <div className="col-span-5">
        {/* Introduction */}
        <div
          className="min-h-screen flex items-center 
        justify-center gap-7 bg-gray-100 py-5"
        >
          <div className="bg-white p-6 rounded-2xl shadow-md w-[400px] h-[731px]">
            <img
              src={img_about01}
              className="w-full h-[400px] rounded-xl mt-2"
            />
            <p className="text-center p-4 text-3xl uppercase font-bold">the</p>
            <img
              src={img_about04}
              className="w-full h-[200px] rounded-xl mt-2"
            />
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md w-[400px]">
            <div>
              <h2 className="text-2xl font-bold mb-4">About Us</h2>
              <p className="text-gray-700 mb-4">
                Welcome to our website! We are dedicated to providing the best
                service possible.
              </p>
              <p className="text-gray-700 mb-4">
                Our team is composed of experienced professionals who are
                passionate about what they do.
              </p>
              <p className="text-gray-700">
                Thank you for visiting our site. We hope you find what you're
                looking for!
              </p>
              <img
                src={img_about03}
                className="w-full h-[400px] rounded-xl mt-2"
              />
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md w-[400px] h-[731px]">
            <img
              src={img_about02}
              className="w-full h-[400px] rounded-xl mt-2"
            />
            <p className="text-center p-4 text-3xl uppercase font-bold">shop</p>
            <img
              src={img_about05}
              className="w-full h-[200px] rounded-xl mt-2"
            />
          </div>
        </div>
        <div className="bg-gray-100">
          {/* Support */}
          <div
            className="flex justify-center gap-16 
          place-items-center border-none pb-24 pt-16"
          >
            {aboutUs.map((about) => {
              return (
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-gray-300 p-2 rounded-full">
                    <div className="bg-black p-3 rounded-full">
                      {about.icon}
                    </div>
                  </div>
                  <p className="font-semibold">{about.title}</p>
                  <p className="font-light">{about.subTitle}</p>
                </div>
              );
            })}
          </div>
          {/* Manager */}
          <div
            className="flex justify-center 
            gap-16 place-items-center 
            border-none pb-40 pt-2"
          >
            {managerImages.map((img) => (
              <div key={img.id} className="flex flex-col gap-1">
                <img src={img.img} className="h-[350px] w-[260px]" />
                <p className="text-2xl font-semibold">{img.name}</p>
                <p className="text-sm font-light">{img.positon}</p>
                <div className="flex gap-2">
                  <i className="fa-brands fa-square-instagram text-2xl"></i>
                  <i className="fa-brands fa-linkedin text-2xl"></i>
                  <i className="fa-brands fa-square-twitter text-2xl"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default About;
