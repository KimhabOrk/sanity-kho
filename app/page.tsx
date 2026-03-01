"use client";

import Image from "next/image";
import Navbar from "@/components/Navigation";
import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-black">
      <section className="w-full h-screen relative overflow-hidden">
        {/* Background video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-screen h-screen object-cover md:hidden lg:hidden"
            poster="https://ik.imagekit.io/kimhabork/assets/poster-mobile.jpg?updatedAt=1772289204429"
          >
            <source
              src="https://ik.imagekit.io/kimhabork/assets/video/VE20260226015538.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-screen h-screen object-cover hidden md:block lg:block"
            poster="https://ik.imagekit.io/kimhabork/assets/poster-desktop.jpeg?updatedAt=1772289275320"
          >
            <source
              src="https://ik.imagekit.io/kimhabork/assets/video/VID_20260213225836.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <Navbar transparent={true} />

        {/* Content overlay */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 mx-auto">
          {/**<h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
          Kimhab Ork
        </h1>**/}
          <div className="flex flex-col w-full justify-center items-center mx-auto px-2 md:px-6 pb-6">
            <Image
              src="https://ik.imagekit.io/kimhabork/assets/kho-dark.png"
              width={800}
              height={194}
              priority
              alt="logo"
              className="h-full w-full object-cover mb-3 md:mb-8"
            />
            <p className="text-lg md:text-2xl lg:text-3xl text-white uppercase max-w-6xl mb-6 md:mb-12">
              Blending Artistry with Commercial Excellence
            </p>
          </div>
          <div className="fixed bottom-0 right-0 left-0 w-full z-20">
            <div className="py-6 md:py-8 lg:py-10 w-full">
              <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                {/* Bottom */}
                <div className="pt-4">
                  <div className="flex gap-5 md:gap-8 justify-center items-center mx-auto mb-3">
                    <Link href="https://facebook.com/kimhab.ork.kh">
                      <Facebook
                        size={24}
                        className="h-6 w-6 md:h-8 md:w-8 text-white"
                      />
                    </Link>
                    <Link href="https://instagram.com/kimhab_ork">
                      <Instagram
                        size={24}
                        className="h-6 w-6 md:h-8 md:w-8 text-white"
                      />
                    </Link>
                    <Link href="https://linkedin.com/in/kimhab-ork">
                      <Linkedin
                        size={24}
                        className="h-6 w-6 md:h-8 md:w-8 text-white"
                      />
                    </Link>
                    <Link href="https://tiktok.com/@">
                      <Image
                        src="/tiktok.png"
                        width={24}
                        height={24}
                        alt="TikTok Logo"
                        priority
                        className="h-6 w-6 md:h-8 md:w-8 object-cover"
                      />
                    </Link>
                    <Link href="https://www.pinterest.com/kimhab_ork">
                      <Image
                        src="/pinterest.png"
                        width={24}
                        height={24}
                        alt="Pinterest Logo"
                        priority
                        className="h-6 w-6 md:h-8 md:w-8 object-cover"
                      />
                    </Link>
                    <Link href="https://www.threads.com/@kimhab_ork">
                      <Image
                        src="/threads.png"
                        width={24}
                        height={24}
                        alt="Threads Logo"
                        priority
                        className="h-6 w-6 md:h-8 md:w-8 object-contain"
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col justify-between items-center gap-3">
                    {/** <div className="flex justify-center items-center mx-auto gap-4">
                      <Link
                        href="/lhttps://gallery.kimhabork.site/art"
                        className="text-white/80 hover:text-white text-sm transition-colors"
                      >
                        Art Gallery
                      </Link>
                      <Link
                        href="https://gallery.kimhabork.site/"
                        className="text-white/80 hover:text-white text-sm transition-colors"
                      >
                        Runway Gallery
                      </Link>
                    </div> **/}
                    <p className="text-white/80 text-sm md:text-md">
                      &copy; {currentYear} Kimhab Ork. All rights reserved.
                    </p>
                    <div className="flex justify-center items-center mx-auto gap-4">
                      <Link
                        href="/privacy"
                        className="text-white/80 hover:text-white text-sm md:text-md transition-colors"
                      >
                        Privacy Policy
                      </Link>
                      <Link
                        href="/terms"
                        className="text-white/80 hover:text-white text-sm md:text-md transition-colors"
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
    </div>
  );
}
