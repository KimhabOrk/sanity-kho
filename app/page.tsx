'use client'

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import Link from 'next/link'
import { Instagram, Facebook, Linkedin } from 'lucide-react';


export default function Home() {
  const currentYear = new Date().getFullYear()
  const heroVideo = "https://ik.imagekit.io/kimhabork/assets/video/VE20260226015538.mp4";

  return (
    <>
      <Navbar />
      <section className="w-full max-h-screen h-screen relative bg-black overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-screen object-cover"
          poster="/poster.jpeg"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content overlay */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 mx-auto">
          {/**<h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
          Kimhab Ork
        </h1>**/}
          <div className="flex flex-col w-full justify-center items-center mx-auto px-2 md:px-4">
            <Image
              src="https://ik.imagekit.io/kimhabork/assets/kho-dark.png"
              width={800}
              height={194}
              priority
              alt="logo"
              className="h-full w-full object-cover mb-3 md:mb-6"
            />
            <p className="text-lg md:text-2xl text-white uppercase max-w-2xl">
              Blending Artistry with Commercial Excellence
            </p>
          </div>
          <div className="fixed bottom-0 right-0 left-0 w-full z-20">
            <div className="py-6 md:py-10 w-full">
              <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                {/* Bottom */}
                <div className="pt-4">
                  <div className="flex gap-6 md:gap-10 justify-center items-center mx-auto mb-3">
                    <Link href="https://facebook.com/kimhab.ork.kh">
                      <Facebook
                        size={24}
                        className="h-6 w-6 md:h-8 md:w-8 text-white hover:text-primary"
                      />
                    </Link>
                    <Link href="https://instagram.com/kimhab_ork">
                      <Instagram
                        size={24}
                        className="h-6 w-6 md:h-8 md:w-8 text-white hover:text-primary"
                      />
                    </Link>
                    <Link href="https://linkedin.com/in/kimhab-ork">
                      <Linkedin
                        size={24}
                        className="h-6 w-6 md:h-8 md:w-8 text-white hover:text-primary"
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col justify-between items-center gap-3">
                    <p className="text-white text-sm">
                      &copy; {currentYear} Kimhab Ork. All rights reserved.
                    </p>
                    <div className="flex justify-center items-center mx-auto gap-4">
                      <Link
                        href="/privacy"
                        className="text-white hover:text-white text-sm transition-colors"
                      >
                        Privacy Policy
                      </Link>
                      <Link
                        href="/terms"
                        className="text-white hover:text-white text-sm transition-colors"
                      >
                        Terms & Conditions
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
