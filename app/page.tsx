"use client";
import Image from "next/image";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import YouTubeSlider from "@/components/video";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "./hooks/useInView";

export default function Home() {
  const [headerRef, headerInView] = useInView();
  const [introRef, introInView] = useInView();
  const [interviewRef, interviewInView] = useInView();
  const [hardworkRef, hardworkInView] = useInView();
  const [futureRef, futureInView] = useInView();

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 pt-24 md:pt-28">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div
            ref={headerRef}
            className={`text-center md:text-left transition-all duration-1000 delay-300 ${
              headerInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold antialiased">
              <TypeAnimation
                sequence={["Shonki Canadian"]}
                wrapper="span"
                speed={1}
              />
            </h1>
            <h1 className="font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 mt-3 md:mt-5">
              where we give a voice to the hardworking farmers who feed the
              world.
            </h1>
          </div>
          <div
            ref={headerRef}
            className={`flex justify-center transition-all duration-1000 delay-500 ${
              headerInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <YouTubeSlider />
          </div>
        </div>

        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/80 to-transparent my-12 md:my-16"></div>

        <div className="min-h-[80vh] md:min-h-screen flex items-center justify-center py-8 md:py-12">
          <div
            ref={introRef}
            className={`text-center space-y-4 md:space-y-6 p-4 md:p-6 transition-all duration-1000 delay-300 ${
              introInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-base md:text-lg">Hello I am</p>
            <p className="text-transparent bg-gradient-to-r from-purple-700 to-purple-300 bg-clip-text font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Amrit Singh
            </p>
            <Image
              src="/shonki_farmer_1.png"
              alt="des"
              width={600}
              height={600}
              className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] mx-auto"
            />
            <p className="text-sm md:text-lg lg:text-xl">
              Here is some more text after the image.
            </p>
          </div>
        </div>

        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/80 to-transparent my-12 md:my-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div
            ref={interviewRef}
            className={`text-center md:text-left transition-all duration-1000 delay-300 ${
              interviewInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold antialiased">
              Interview Farmers
            </h1>
            <h1 className="font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 mt-3 md:mt-5">
              Through insightful interviews, we explore the lives, challenges,
              and triumphs of farmers from all walks of life.
            </h1>
          </div>
          <div
            ref={interviewRef}
            className={`flex justify-center transition-all duration-1000 delay-500 ${
              interviewInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <Image
              src="/shonki_farmer_2.png"
              alt="des"
              width={600}
              height={600}
              className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
            />
          </div>
        </div>

        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/80 to-transparent my-12 md:my-16"></div>

        <div className="mt-12 md:mt-20 lg:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div
            ref={hardworkRef}
            className={`text-center md:text-left transition-all duration-1000 delay-300 order-1 md:order-2 ${
              hardworkInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold antialiased">
              Farmers Hardwork
            </h1>
            <h1 className="font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 mt-3 md:mt-5">
              Whether you are interested in sustainable farming practices,
              innovative techniques, or the stories behind the people who grow
              our food, our channel offers a unique and personal look into the
              heart of agriculture.
            </h1>
          </div>
          <div
            ref={hardworkRef}
            className={`flex justify-center transition-all duration-1000 delay-500 order-2 md:order-1 ${
              hardworkInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <Image
              src="/shonki_farmer_3.png"
              alt="des"
              width={600}
              height={600}
              className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
            />
          </div>
        </div>

        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/80 to-transparent my-12 md:my-16"></div>

        <div className="mt-12 md:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div
              ref={futureRef}
              className={`text-center md:text-left transition-all duration-1000 delay-300 order-1 ${
                futureInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold antialiased">
                Future of Farming
              </h1>
              <h1 className="font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 mt-3 md:mt-5">
                Join us as we highlight the unsung heroes of the farming world
                and dive deep into the important conversations shaping the
                future of food production.
              </h1>
            </div>
            <div
              ref={futureRef}
              className={`flex justify-center transition-all duration-1000 delay-500 order-2 md:order-2 ${
                futureInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <Image
                src="/shonki_farmer_4.png"
                alt="des"
                width={600}
                height={600}
                className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/80 to-transparent my-12 md:my-16"></div>

        <footer className="py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h1 className="text-center md:text-left text-sm md:text-base lg:text-lg">
              © Shonki Canadian
            </h1>
            <div className="grid grid-cols-3 gap-6">
              <a
                href="https://www.instagram.com/shonkicanadian/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors"
              >
                <FaSquareInstagram className="text-xl md:text-2xl lg:text-3xl" />
              </a>
              <a
                href="https://www.facebook.com/shonki.canadian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors"
              >
                <FaFacebook className="text-xl md:text-2xl lg:text-3xl" />
              </a>
              <a
                href="https://www.youtube.com/@Shonkicanadian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors"
              >
                <FaYoutube className="text-xl md:text-2xl lg:text-3xl" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
