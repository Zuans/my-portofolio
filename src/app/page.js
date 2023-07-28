"use client";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillHeart } from "react-icons/ai";
import { FaPaintBrush, FaCode, FaUser } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import moviePorto from "../../public/img/movie-porto.png";
import yaePorto from "../../public/img/new-yae.png";
import restaurantPorto from "../../public/img/restaurant-porto.png";
import avatar from "../../public/img/avatar.png";
import perpusImg from "../../public/img/perpus.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : " "}>
      <div className="bg-white dark:bg-gray-900">
        <main className=" px-10 font-montserrat md:px-20 lg:px-40  ">
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
              <h1 className="text-xl  dark:text-teal-500">zuans.dev</h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="text-2xl cursor-pointer dark:text-teal-500"
                  />
                </li>
                <li>
                  <a
                    target="__blank"
                    href="https://drive.google.com/file/d/1Zr3UFoB8jKyiFy64UphUty7Oy5y6nBAN/view?usp=drive_link"
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-10 font-poppins">
              <h2 className="text-5xl  py-2 text-teal-500 font-medium md:text-6xl">
                Juan Ewaldo
              </h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-300">
                Front end Developer
              </h3>
              <p className="text-md  py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-500">
                Interested in tech especially in web development and web design
                and enthusiat to make awesome web with anyone who love this too
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-12  text-gray-600">
              <a href="https://github.com/Zuans">
                <AiFillGithub className="dark:text-teal-500" />
              </a>
              <a href="https://www.linkedin.com/in/juan-ewaldo-5517a1246/">
                <AiFillLinkedin className="dark:text-teal-500" />
              </a>
            </div>
            <div className="relative bg-gradient-to-b mx-auto from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden p-10 md:h-96 md:w-96">
              <Image src={avatar} alt="hero-image" objectFit="cover" />
            </div>
          </section>
          <section>
            <div className="mt-10 font-poppins">
              <h3 className="text-3xl py-1 font-semibold dark:text-teal-500">
                Services i offer
              </h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
                Since i create my project at my own so feel{" "}
                <strong className="text-teal-500 font-semibold">
                  exicited to improve
                </strong>{" "}
                my skill and communication and
                <strong className="text-teal-500 font-semibold mx-1">
                  develop digital product
                </strong>
                for both bussines and consumer which has collaborate with
                talented people
              </p>
            </div>
            <div className="lg:flex gap-10 font-poppins ">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-teal-700">
                <FaPaintBrush className="text-teal-500 text-5xl mx-auto dark:text-white" />
                <h3 className="text-xl font-medium pt-8 pb-2 dark:text-white">
                  User Interface
                </h3>
                <p className="pb-4 text-gray-800 dark:text-gray-200">
                  Creating elegant designs suited for your needs following core
                  design theory
                </p>
                <h4 className="pb-1 text-teal-500 dark:text-white">
                  Design tools I use
                </h4>
                <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-teal-700">
                <FaCode className="text-teal-500 text-5xl mx-auto dark:text-white" />
                <h3 className="text-xl font-medium pt-8 pb-2 dark:text-white">
                  Front End Development
                </h3>
                <p className="pb-4 text-gray-800 dark:text-gray-200">
                  Implement a design to web and develop website in front end
                  part which also have cool interaction with user so the user
                  feel happy
                </p>
                <h4 className="pb-1 text-teal-500 dark:text-white">
                  Design tools I use
                </h4>
                <p className="text-gray-800 py-1 dark:text-gray-400">
                  Visual Studio Code
                </p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-teal-700">
                <FaUser className="text-teal-500 text-5xl mx-auto dark:text-white" />
                <h3 className="text-xl font-medium pt-8 pb-2 dark:text-white">
                  User experience
                </h3>
                <p className="pb-4 text-gray-800 dark:text-gray-200">
                  Make user feel more easier for navigation and create awesome
                  experience when user come to website
                </p>
                <h4 className="pb-1 text-teal-500 dark:text-white">
                  Design tools I use
                </h4>
                <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
              </div>
            </div>
          </section>
          <div className="font-poppins">
            <h3 className="text-3xl py-1 font-semibold text-teal-500">
              Portofolio
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400 pb-4">
              Implement a design to web and develop website in front end part
              which also have{" "}
              <strong className="text-teal-500 font-semibold mx-1">
                cool interaction
              </strong>
              with user so the user feel happy and create my project at my own
              so feel exicited to improve my skill and communication and develop
              digital product for both{" "}
              <strong className="text-teal-500 font-semibold mx-1">
                bussines
              </strong>
              and{" "}
              <strong className="text-teal-500 font-semibold mx-1">
                consumer
              </strong>
              which has collaborate with{" "}
              <strong className="text-teal-500 font-semibold mx-1">
                talented people
              </strong>
            </p>
          </div>
          <div className="flex flex-col mt-16">
            <div className="flex flex-col mb-24 md:flex-row basis-1/3 flex-1 ">
              <Image
                src={restaurantPorto}
                className="object-cover rounded-lg max-w-sm md:mr-10 shadow-lg"
                width={"100%"}
                alt="yae-img"
              />
              <div className="flex-1">
                <h3 className="mt-4  font-semibold py-2 text-xl text-teal-500 md:mt-0 md:pt-0">
                  My Restaurant
                </h3>
                <p className="text-gray-600 mb-8 leading-8">
                  For final project in class front end web expert at Dicoding
                  indonesia this website can show you recommended restaurant and
                  see what other people think about this resturant in comment
                  section, build with responsive design, web component and
                  Progressive Web App for make mobile friendly
                </p>
                <a
                  className="px-8 py-4 text-white bg-gradient-to-r from-teal-500 to-gray-800 rounded-lg font-semibold cursor-pointer"
                  href="https://restaurant-pwa-zuans.netlify.app/"
                  target="_blank"
                >
                  Demo
                </a>
              </div>
            </div>
            <div className="flex flex-col mb-24 md:flex-row basis-1/3 flex-1 ">
              <div className="flex-1">
                <h3 className="mt-4  font-semibold py-2 text-xl text-teal-500 md:mt-0 md:pt-0">
                  Yae Landing Page
                </h3>
                <p className="text-gray-600 mb-8 leading-8">
                  I like game and want to combine about game and web development
                  so i create landing page guide yae miko so you can get more
                  information about this character, ability, equipment, upgrade
                  cost etc, and the goal of this project is to improve my
                  styling web using plain css and improve my ui design skill
                  with using figma so first i design after that slicing into
                  real website
                </p>
                <a
                  className="px-8 py-4 text-white bg-gradient-to-r from-teal-500 to-gray-800 rounded-lg font-semibold cursor-pointer"
                  href="https://yae-stats.netlify.app/"
                  target="_blank"
                >
                  Demo
                </a>
              </div>
              <Image
                src={yaePorto}
                height={"100%"}
                className="object-cover rounded-lg max-w-sm md:ml-10 shadow-lg"
                width={"100%"}
                alt="yae-img"
                layout="responsive"
              />
            </div>
            <div className="flex flex-col mb-24 md:flex-row basis-1/3 flex-1 ">
              <Image
                src={perpusImg}
                height={"100%"}
                className="object-cover rounded-lg max-w-sm md:mr-10 shadow-lg"
                width={"100%"}
                alt="yae-img"
                layout="responsive"
              />
              <div className="flex-1">
                <h3 className="mt-4  font-semibold py-2 text-xl text-teal-500 md:mt-0 md:pt-0">
                  Perpus
                </h3>
                <p className="text-gray-600 mb-8 leading-8">
                  after learn front end i have interest in backend development
                  and i learn php native and create perpus web in this web you
                  can see what books are avaible, transaction for borrow book
                  and transaction for return book all of these implement CRUD in
                  perpus web
                </p>
                <a
                  className="px-8 py-4 text-white bg-gradient-to-r from-teal-500 to-gray-800 rounded-lg font-semibold cursor-pointer"
                  href="https://github.com/Zuans/my_perpus"
                  target="_blank"
                >
                  Repository
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-24 md:flex-row basis-1/3 flex-1 ">
            <div className="flex-1">
              <h3 className="mt-4  font-semibold py-2 text-xl text-teal-500 md:mt-0 md:pt-0">
                MovieIn
              </h3>
              <p className="text-gray-600 mb-8 leading-8">
                Final project for fundamental front end web at dicoding
                indonesia and have goal to create responsive web and good
                visibilty with consume API Public using AJAX for showing all
                recommend movie, highest rate, movie and search a movie
              </p>
              <a
                className="px-8 py-4 text-white bg-gradient-to-r from-teal-500 to-gray-800 rounded-lg font-semibold cursor-pointer"
                href="https://movieinn.netlify.app/"
                target="_blank"
              >
                Demo
              </a>
            </div>
            <Image
              src={moviePorto}
              height={"100%"}
              className="object-cover rounded-lg max-w-sm md:ml-10 shadow-lg"
              width={"100%"}
              alt="yae-img"
              layout="responsive"
            />
          </div>
        </main>
        <footer className="px-10 py-7 text-white bg-teal-500 mt-28 font-poppins flex flex-col md:flex-row md:items-center md:justify-between dark:bg-teal-700">
          <div>
            Build with
            <strong className="font-semibold mx-1 text-white dark:text-teal-500 ">
              React.js
            </strong>{" "}
            |{" "}
            <strong className="font-semibold mx-1 text-white dark:text-teal-500 ">
              Tailwind.css
            </strong>
            <p className="text-small text-gray-200 mt-2">
              Avatar Image by Freepik
            </p>
          </div>
          <div className="text-xl flex  mb-2 md:mb-0">
            Made with
            <AiFillHeart className="text-pink-500 mx-2" />{" "}
            <span className="font-semibold">zuans</span>
          </div>
          <div className="text-5xl flex justify-start gap-8 pt-6 text-white md:pt-0 dark:text-teal-500">
            <a href="https://github.com/Zuans">
              <AiFillGithub className="dark:text-teal-500" />
            </a>
            <a href="https://www.linkedin.com/in/juan-ewaldo-5517a1246/">
              <AiFillLinkedin className="dark:text-teal-500" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
