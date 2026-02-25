import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Kimhab Ork - Fashion Designer',
  description: 'Discover the artistic and commercial world of Kimhab Ork\'s fashion designs.',
}

export default function Home() {
  const heroVideo = 'https://ik.imagekit.io/kimhabork/assets/video/2026-02-01-133634421.mp4'
  
  return (
    <section className="w-full max-h-screen h-screen relative bg-black overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
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
        <div className="flex w-full justify-center items-center mx-auto">
          <Image 
            src="https://ik.imagekit.io/kimhabork/assets/kho-dark.png"
            width={800}
            height={184}
            priority
            alt="logo"
            className="h-[184px] md:h-[244px] w-full object-cover mb-4 md:mb-6" 
          />
        <p className="text-lg md:text-2xl text-white uppercase max-w-2xl">
          Blending Artistry with Commercial Excellence
        </p>
        </div>
      </div>
    </section>
  )
}