import { useState } from "react";
import { Carousel } from "antd";
import { Banner, BigZone, CategoriesBoth } from "../../interfaces/interfaces";
import { Category } from "../../interfaces/interfaces";
import Footer from "../../layout/footer/Footer";

import ImageSidle1 from "../../assets/images/image-silde/photo-1739382120673-54ec4d63dc62.avif";
import ImageSidle2 from "../../assets/images/image-silde/photo-1738830986230-57029d6ef4f8.avif";
import ImageSidle3 from "../../assets/images/image-silde/photo-1644483878406-bc4a2f63de83.avif";
import ImageSidle4 from "../../assets/images/image-silde/photo-1737994874349-9da316080f17.avif";
import ImageSidle5 from "../../assets/images/image-silde/photo-1735293840436-b6950d1cdb1a.avif";
import Header2 from "../../layout/header/Header2";

import ImagePerson1 from "../../assets/images/image-silde/577fb5ded340b669c0ceef4d6e660fec-removebg-preview.png";
import ImagePerson2 from "../../assets/images/image-silde/kolp-removebg-preview.png";

import CategoryImage1 from "../../assets/images/categories/new-arrival/category-jogger.jpg";
import CategoryImage2 from "../../assets/images/categories/new-arrival/active-Tshirt.jpg";
import CategoryImage3 from "../../assets/images/categories/new-arrival/seelve.jpg";
import CategoryImage4 from "../../assets/images/categories/new-arrival/urban.jpg";
import CategoryImage5 from "../../assets/images/categories/new-arrival/Blouses & Shirts.jpg";
import CategoryImage6 from "../../assets/images/categories/new-arrival/Crop Tops.jpg";
import CategoryImage7 from "../../assets/images/categories/new-arrival/Jackets & Blazers.jpg";
import CategoryImage8 from "../../assets/images/categories/new-arrival/Suits.jpg";

import ImageBigZone1 from "../../assets/images/image-bigzone/bigzone-person1-removebg-preview.png";
import ImageBigZone2 from "../../assets/images/image-bigzone/bigzone-person2-removebg-preview.png";
import ImageBigZone3 from "../../assets/images/image-bigzone/bigzone-person3-removebg-preview.png";
import ImageBigZone4 from "../../assets/images/image-bigzone/bigzone-person4-removebg-preview.png";
import ImageBigZone5 from "../../assets/images/image-bigzone/bigzone-person5-removebg-preview.png";

import ShirtCategories from "../../assets/images/categories/men/shirt.jpg";
import ActiveWearCategories from "../../assets/images/categories/men/activewear.jpg";
import PoloCategories from "../../assets/images/categories/men/polo.jpg";
import HoodiesCategories from "../../assets/images/categories/men/hoodies.jpg";
import JeansCategories from "../../assets/images/categories/men/jeans.jpg";
import PlainShirtsCategories from "../../assets/images/categories/men/plain-shirt.jpg";
import PrintedTShirtCategories from "../../assets/images/categories/men/printed-Tshirt.jpg";
import BoxersCategories from "../../assets/images/categories/men/boxers.jpg";

import HoodiesWomenCategories from "../../assets/images/categories/women/hoodies-sweetshirts-women.jpg";
import CoatsWomenCategories from "../../assets/images/categories/women/coats-parkas-women.jpg";
import TShirtWomenCategories from "../../assets/images/categories/women/tshirts-women.jpg";
import BoxersWomenCategories from "../../assets/images/categories/women/boxers-women.jpg";

import Nike from "../../assets/images/brands/nike.jpg";
import Burberry from "../../assets/images/brands/burberry.jpg";
import Adidas from "../../assets/images/brands/addidas.jpg";
import Levis from "../../assets/images/brands/levis.jpg";
import Prada from "../../assets/images/brands/prada.jpg";

import Avatar1 from '../../assets/images/avatars/03ebd625cc0b9d636256ecc44c0ea324.jpg'
import Avatar2 from '../../assets/images/avatars/70a236f90d2803f9da32d0558be75ba1.jpg'
import Avatar3 from '../../assets/images/avatars/c2ee3d3c8d1c91c21fb796750dc042ae.jpg'
const banners: Banner[] = [
  {
    title: "High Coziness",
    subtitle: "Low Price",
    discount: "UPTO 50% OFF",
    buttonText: "Explore Items",
    image: ImagePerson1,
    bgColorFrom: "from-green-300",
    bgColorTo: "to-yellow-400",
  },
  {
    title: "Breezy Summer Style",
    subtitle: "Beyoung Presents",
    discount: "UPTO 50% OFF",
    buttonText: "Explore Items",
    image: ImagePerson2,
    bgColorFrom: "from-slate-500",
    bgColorTo: "to-purple-400",
  },
];

const categories: Category[] = [
  {
    title: "Knitted Joggers",
    image: CategoryImage1,
  },
  {
    title: "Active T-Shirts",
    image: CategoryImage2,
  },
  {
    title: "Full Sleeve",
    image: CategoryImage3,
  },
  {
    title: "Urban Shirts",
    image: CategoryImage4,
  },
  {
    title: "Blouses & Shirts",
    image: CategoryImage5,
  },
  {
    title: "Crop Tops",
    image: CategoryImage6,
  },
  {
    title: "Jackets & Blazers",
    image: CategoryImage7,
  },
  {
    title: "Suits",
    image: CategoryImage8,
  },
];

const imageBigZones: BigZone[] = [
  {
    title: "Hawaiian Shirts",
    subtitle: "Dress up in summer vibe",
    discount: "upto 50% off",
    image: ImageBigZone1,
    bgColor: "bg-cyan-500",
  },
  {
    title: "Printed T-Shirt",
    subtitle: "New Design Every Week",
    discount: "upto 40% off",
    image: ImageBigZone2,
    bgColor: "bg-pink-400",
  },
  {
    title: "Cargo Joggers",
    subtitle: "Move with style & comfort",
    discount: "upto 50% off",
    image: ImageBigZone3,
    bgColor: "bg-gray-500",
  },
];

const imageBigZones2: BigZone[] = [
  {
    title: "Urban Shirts",
    subtitle: "Live In Confort",
    discount: "flat 60% off",
    image: ImageBigZone5,
    bgColor: "bg-slate-300",
  },
  {
    title: "Oversized T-Shirt",
    subtitle: "Street Style Icon",
    discount: "flat 70% off",
    image: ImageBigZone4,
    bgColor: "bg-green-300",
  },
];

const categoriesMen: CategoriesBoth[] = [
  {
    name: "Shirts",
    image: ShirtCategories,
  },
  {
    name: "Active-wear",
    image: ActiveWearCategories,
  },
  {
    name: "Polo-wear",
    image: PoloCategories,
  },
  {
    name: "Hoodies & Sweetshirts",
    image: HoodiesCategories,
  },
  {
    name: "Plain-TShirts",
    image: PlainShirtsCategories,
  },
  {
    name: "Jeans",
    image: JeansCategories,
  },
  {
    name: "Printed-Shirts",
    image: PrintedTShirtCategories,
  },
  {
    name: "Boxers-men",
    image: BoxersCategories,
  },
];

const categoriesWomen: CategoriesBoth[] = [
  {
    name: "Hoodies & Sweetshirts",
    image: HoodiesWomenCategories,
  },
  {
    name: "Tees & TShirts",
    image: TShirtWomenCategories,
  },
  {
    name: "Coats & Parkas",
    image: CoatsWomenCategories,
  },
  {
    name: "Boxers-women",
    image: BoxersWomenCategories,
  },
];

const brands = [Nike, Adidas, Burberry, Levis, Prada];

const feedbackData = [
  {
    name: "Floyd Miles",
    imgSrc: Avatar1,
    rating: 4,
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    name: "James Rakina",
    imgSrc: Avatar2,
    rating: 4,
    content:
      "Tullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    name: "Savannah Nguyen",
    imgSrc: Avatar3,
    rating: 5,
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="col-span-5">
      {/* Header  */}
      <Header2 />
      {/* Banners Carousel */}
      <div>
        <Carousel arrows infinite={true}>
          <div>
            <img src={ImageSidle1} className="w-full h-[550px]" />
          </div>
          <div>
            <img src={ImageSidle2} className="w-full h-[550px]" />
          </div>
          <div>
            <img src={ImageSidle3} className="w-full h-[550px]" />
          </div>
          <div>
            <img src={ImageSidle4} className="w-full h-[550px]" />
          </div>
          <div>
            <img src={ImageSidle5} className="w-full h-[550px]" />
          </div>
        </Carousel>
      </div>
      {/* Banners */}
      <div className="flex gap-4 p-5">
        {banners.map((banner) => (
          <div
            className={`relative w-1/2 h-[190px] p-6 rounded-xl text-white bg-gradient-to-r ${banner.bgColorFrom} ${banner.bgColorTo}  col-span-5`}
          >
            <div className="absolute inset-0 flex flex-col justify-center p-6">
              <span className="text-sm font-semibold">{banner.subtitle}</span>
              <h2 className="text-2xl font-bold">{banner.title}</h2>
              <p className="text-sm mt-2">{banner.discount}</p>
              <a
                href="#"
                className="mt-4 inline-block text-sm font-semibold underline"
              >
                {banner.buttonText}
              </a>
            </div>
            <img
              src={banner.image}
              alt={banner.title}
              className="absolute bottom-0 right-0 w-1/2 rounded-lg h-[190px]"
            />
          </div>
        ))}
      </div>
      {/* New arrival */}
      <div className="flex flex-col gap-4 p-5">
        <div className="text-xl">
          <span className="icon-new-arrival">.</span> New Arrival
        </div>
        <div className="relative flex items-center justify-center p-4">
          <button
            onClick={prevSlide}
            className="absolute left-0 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300"
          >
            ◀
          </button>
          <div className="flex gap-4 overflow-hidden">
            {categories.map((category, index) => (
              <div
                className={`flex flex-col items-center transition-transform duration-500 ease-in-out transform ${
                  index === currentIndex ? "scale-100" : "scale-90 opacity-50"
                }`}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-40 h-40 rounded-lg object-cover"
                />
                <p className="mt-2 text-center font-medium">{category.title}</p>
              </div>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-0 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300"
          >
            ▶
          </button>
        </div>
      </div>
      {/* Big Saving Zone */}
      <div className="p-5">
        <div className="text-xl">
          <span className="icon-new-arrival">.</span> Big Saving Zone
        </div>
        <div className="grid grid-cols-3 gap-3 pt-3">
          {imageBigZones.map((imageBigZone, index) => {
            return (
              <div
                key={index}
                className={`flex gap-10 ${imageBigZone.bgColor} rounded-md shadow-lg`}
              >
                <div className="flex flex-col gap-2 px-5 py-8 text-white">
                  <h1>{imageBigZone.title}</h1>
                  <p className="text-xs italic font-light">
                    {imageBigZone.subtitle}
                  </p>
                  <p className="font-semibold italic uppercase">
                    {imageBigZone.discount}
                  </p>
                  <div className="relative left-12">
                    <i className="fa-solid fa-arrow-down text-2xl"></i>
                  </div>
                  <div>
                    <button className="border-2 px-5 py-3 rounded-md">
                      Shop now
                    </button>
                  </div>
                </div>
                <div>
                  <img src={imageBigZone.image} className="h-[350px]" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-3 pt-3">
          {imageBigZones2.map((imageBigZone2, index) => {
            return (
              <div
                key={index}
                className={`flex gap-10 ${imageBigZone2.bgColor} rounded-md shadow-lg`}
              >
                <div>
                  <img
                    src={imageBigZone2.image}
                    className="h-[380px] w-[380px]"
                  />
                </div>
                <div className="flex flex-col gap-2 px-5 py-8 text-white">
                  <h1>{imageBigZone2.title}</h1>
                  <p className="text-xs font-light italic">
                    {imageBigZone2.subtitle}
                  </p>
                  <p className="font-semibold text-xl italic uppercase">
                    {imageBigZone2.discount}
                  </p>
                  <div className="relative left-16">
                    <i className="fa-solid fa-arrow-down text-3xl"></i>
                  </div>
                  <div>
                    <button className="border-2 px-10 py-4 rounded-md">
                      Shop now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Categories for Men */}
      <div className="p-5">
        <div className="text-xl">
          <span className="icon-new-arrival">.</span> Categories for Men
        </div>
        <div className="grid grid-cols-4 gap-4">
          {categoriesMen.map((men, index) => {
            return (
              <div
                key={index}
                className="flex gap-3 h-[200px] p-5 rounded-md shadow-md cursor-pointer"
              >
                <img
                  src={men.image}
                  alt="Category"
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="flex flex-col gap-2 ">
                  <h2 className="font-semibold">{men.name}</h2>
                  <button className="border-2 py-1 px-2 rounded-md">
                    Click
                  </button>
                  <a
                    href="#"
                    className="text-xs text-center text-gray-400 italic underline"
                  >
                    Expolore now
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Categories for Women */}
      <div className="p-5">
        <div className="text-xl">
          <span className="icon-new-arrival">.</span> Categories for Women
        </div>
        <div className="grid grid-cols-4 gap-4">
          {categoriesWomen.map((women, index) => {
            return (
              <div
                key={index}
                className="flex gap-3 h-[200px] p-5 rounded-md shadow-md cursor-pointer"
              >
                <img
                  src={women.image}
                  alt="Category"
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="flex flex-col gap-2 ">
                  <h2 className="font-semibold">{women.name}</h2>
                  <button className="border-2 py-1 px-2 rounded-md">
                    Click
                  </button>
                  <a
                    href="#"
                    className="text-xs text-center text-gray-400 italic underline"
                  >
                    Expolore now
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Top Brand Deal */}
      <div className="p-5">
        <div className="bg-zinc-700 text-center rounded-lg text-purple-50 py-7">
          <h1>
            Top <span className="text-yellow-400">Brands</span> Deal
          </h1>
          <p className="text-base my-3 font-serif">
            Up to <span className="text-yellow-200">60%</span> off on brands
          </p>
          <div className="grid grid-cols-5 place-items-center">
            {brands.map((brand) => {
              return (
                <img
                  src={brand}
                  alt=""
                  className="h-[100px] w-[215px] object-cover rounded-md"
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* Feedback */}
      <div className="p-5">
        <div className="text-xl mb-2">
          <span className="icon-new-arrival">.</span> Feedback
        </div>
        <div className="flex space-x-4">
          {feedbackData.map((feedback, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={feedback.imgSrc}
                alt={feedback.name}
                className="rounded-full w-28 h-28 mb-4"
              />
              <h3 className="font-semibold">{feedback.name}</h3>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < feedback.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 15l-5.878 3.09L5.24 11 0 6.826l6.157-.583L10 0l3.843 6.243 6.157.583L14.76 11l1.618 6.09L10 15z" />
                  </svg>
                ))}
              </div>
              <p className="text-left text-gray-300 mt-2">{feedback.content}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default HomePage;
