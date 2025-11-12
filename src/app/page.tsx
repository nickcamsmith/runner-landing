"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const BACKGROUND_IMAGES = [
  "/images/Runner_BG_01_Upscaled.png",
  "/images/Runner_BG_3_Upscaled.png",
  "/images/Runner_BG_Upscaled_2.png",
  "/images/Runner_BG_Upscaled_4.png",
  "/images/Runner_BG_Upscaled_5.png",
  "/images/Runner_BG_Upscaled_6.png",
  "/images/Runner_Background_Upscaled_7.png",
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMascotHovered, setIsMascotHovered] = useState(false);
  const [email, setEmail] = useState("");
  const [twitterHandle, setTwitterHandle] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(() => {
        // Get random index different from current
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * BACKGROUND_IMAGES.length);
        } while (newIndex === currentImageIndex && BACKGROUND_IMAGES.length > 1);
        return newIndex;
      });
    }, 1000); // Change every 1 second

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, twitterHandle });
    // Handle form submission
    setIsModalOpen(false);
  };

  return (
    <main className="relative w-full h-dvh overflow-hidden bg-staq-gray">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            key={currentImageIndex}
            src={BACKGROUND_IMAGES[currentImageIndex]}
            alt="Runner background"
            fill
            className="object-cover transition-opacity duration-300"
            priority
            quality={100}
          />
        </div>
      </div>

      {/* Runner Text Logo with centered running man */}
      <div className="absolute left-1/2 top-[38px] md:top-[38px] -translate-x-1/2 flex items-center justify-center z-10 w-[calc(100%-32px)] md:w-auto">
        <div className="relative w-full h-[51.3px] md:w-[1348.84px] md:h-[247px]">
          <Image
            src="/images/runner-text.svg"
            alt="RUNNER"
            fill
            className="object-contain"
            priority
          />
          {/* Running Man centered on logo */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[13.35%] aspect-[180/174] md:w-[180px] md:h-[174px] cursor-pointer transition-transform"
            onMouseEnter={() => setIsMascotHovered(true)}
            onMouseLeave={() => setIsMascotHovered(false)}
            style={{
              animation: isMascotHovered
                ? 'spin-fast 0.0875s linear infinite'
                : 'spin-slow 0.525s ease-out forwards',
            }}
          >
            <Image
              src="/images/runner-mascot-full.svg"
              alt="Running man"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Trade the moment subheading and Button */}
      <div className="absolute left-1/2 bottom-[40px] md:bottom-[80px] -translate-x-1/2 z-10 flex flex-col items-center gap-4 md:gap-6 px-6">
        {/* Trade the moment subheading */}
        <h2
          className="font-[family-name:var(--font-karl)] text-[32px] md:text-[48px] leading-[1.2] text-black text-center whitespace-nowrap"
          style={{
            fontWeight: 500,
            WebkitTextStroke: '8px #FFC800',
            paintOrder: 'stroke fill'
          }}
        >
          <style jsx>{`
            @media (min-width: 768px) {
              h2 {
                -webkit-text-stroke: 12px #FFC800 !important;
              }
            }
          `}</style>
          Trade the moment!
        </h2>

        {/* Call to Action Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="font-[family-name:var(--font-karl)] text-[16px] md:text-[18px] leading-[1.2] text-black text-center bg-white rounded-[56px] py-4 px-8 md:py-4 md:px-12 cursor-pointer uppercase transition-all duration-300 ease-in-out whitespace-nowrap"
          style={{
            fontWeight: 500,
            border: '3px solid #000000',
          }}
        >
          <span className="inline-flex items-center gap-2">
            GET EARLY ACCESS
            <span className={`inline-block transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`}>→</span>
          </span>
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-staq-gray border border-[#1D1D1D] rounded-[24px] p-6 w-full max-w-[644px] mx-6">
            {/* Close Button */}
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-6 h-6"
              >
                <Image
                  src="/images/96c2038d03717e92810395236cc28bf8cd72f5f4.svg"
                  alt="Close"
                  width={24}
                  height={24}
                />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 md:px-[88px] pb-8">
              <div className="flex flex-col gap-10 items-center">
                {/* Header */}
                <div className="flex flex-col gap-2 w-full text-center">
                  <h2 className="font-[family-name:var(--font-karl)] text-[18px] leading-[1.2] text-white" style={{ fontWeight: 500 }}>
                    Get early access
                  </h2>
                  <p className="font-[family-name:var(--font-karl)] text-[14px] leading-[18px] text-[#919191]" style={{ fontWeight: 400 }}>
                    Be the first to join the rodeo and catch a runner
                  </p>
                </div>

                {/* Form Fields */}
                <div className="flex flex-col gap-6 w-full">
                  {/* Email Field */}
                  <div className="flex flex-col gap-2 w-full">
                    <label className="font-[family-name:var(--font-karl)] text-[12px] leading-[14px] text-[#919191] uppercase" style={{ fontWeight: 500 }}>
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@gmail.com"
                      className="bg-[#1D1D1D] rounded-[12px] px-3 py-3 font-[family-name:var(--font-karl)] text-[16px] leading-6 text-[#919191] placeholder:text-[#919191] w-full outline-none"
                      style={{ fontWeight: 400 }}
                      required
                    />
                  </div>

                  {/* Twitter Handle Field */}
                  <div className="flex flex-col gap-2 w-full">
                    <label className="font-[family-name:var(--font-karl)] text-[12px] leading-[14px] text-[#919191] uppercase" style={{ fontWeight: 500 }}>
                      X handle
                    </label>
                    <input
                      type="text"
                      value={twitterHandle}
                      onChange={(e) => setTwitterHandle(e.target.value)}
                      placeholder="@yourhandle"
                      className="bg-[#1D1D1D] rounded-[12px] px-3 py-3 font-[family-name:var(--font-karl)] text-[16px] leading-6 text-[#919191] placeholder:text-[#919191] w-full outline-none"
                      style={{ fontWeight: 400 }}
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-staq-yellow rounded-[56px] px-36 py-4 w-full font-[family-name:var(--font-karl)] text-[18px] leading-[1.2] text-staq-gray hover:opacity-90 transition-opacity"
                  style={{ fontWeight: 500 }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
