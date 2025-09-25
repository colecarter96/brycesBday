import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section
        data-scroll-section
        className="h-screen flex flex-col items-center justify-center bg-white text-black overflow-hidden relative"
      >
        {/* Background image with parallax effect */}
        <div
          data-scroll
          data-scroll-speed="-3"
          className="flex absolute inset-0 w-full h-full"
        >
          {/* First image: centered */}
          <div className="flex justify-center items-center w-[50%] h-full">
            <img
              src="/IMG_1309-min.png"
              alt="Birthday Pic"
              className="w-[40%] object-cover"
            />
          </div>

          {/* Second image: stick to bottom */}
          <div className="flex justify-center items-end w-[50%] h-full">
            <img
              src="/IMG_8149-min.png"
              alt="Birthday Pic"
              className="w-[30%] object-cover"
            />
          </div>
        </div>

        {/* Text overlay */}
        <h1
          data-scroll
          data-scroll-speed="-4"
          className="text-6xl font-bold z-10"
          style={{ transformOrigin: "center" }}
        >
          Happy Birthday!
        </h1>

        {/* Optional small subtitle with scale effect */}
        <p
          data-scroll
          data-scroll-speed="-5"
          className="mt-20 text-2xl z-10"
          style={{ transformOrigin: "center" }}
        >
          Can't believe you're 20 bro...
        </p>
      </section>

      <section
        data-scroll-section
        className="h-screen flex flex-col items-center justify-center bg-white text-black"
      >
        <h1 data-scroll data-scroll-speed="2" className="text-6xl mr-50 font-bold">
          Bryce...
        </h1>
        <p data-scroll data-scroll-speed="-1" className="mt-10 ml-100 text-2xl">
          You are my kid brother  
        </p>
      </section>


      
      <section
        data-scroll-section
        className="h-screen flex items-center bg-black text-white overflow-hidden"
      >
        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="3"
          className="text-5xl whitespace-nowrap ml-20"
        >
          We have been learning new stuff since we were little kids
        </div>
      </section>


      

      

      <section
        data-scroll-section
        className="h-screen flex flex-col items-center justify-center bg-white text-black"
      >
        
        <p data-scroll data-scroll-speed="-5" className="mt-10 text-2xl">
          Everything from surfing,
        </p>
        <p data-scroll data-scroll-speed="-5" className="mt-10 text-2xl">
          to skating,
        </p>
        <p data-scroll data-scroll-speed="-5" className="mt-10 text-2xl">
          to kendama,
        </p>
        <p data-scroll data-scroll-speed="-5" className="mt-10 text-2xl">
          to wake surfing,
        </p>
      </section>

      <section
        data-scroll-section
        className="h-screen flex items-center overflow-hidden bg-black"
      >
        <div className="w-full overflow-hidden">
          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-3"
            className="inline-block ml-10 text-5xl whitespace-nowrap text-white"
          >
            So, when it came to your gift this year...
          </div>
        </div>
      </section>

      <section
        data-scroll-section
        className="h-screen flex items-center overflow-hidden bg-white text-black"
      >
        <div className="w-full text-right overflow-hidden">
          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="3"
            className="inline-block mr-10 text-5xl whitespace-nowrap"
          >
            I had to throw it back
          </div>
        </div>
      </section>

      <section
        data-scroll-section
        className="h-screen flex items-center justify-center bg-blue-600 text-white shadow-2xl"
      >
        <div
          data-scroll
          data-scroll-sticky
          data-scroll-target="#sticky-target"
          className="text-6xl"
        >
          Let's play a game of KEN ↓
        </div>
      </section>

      <section
        id="sticky-target"
        data-scroll-section
        className="pt-40 w-full bg-white flex flex-col items-center justify-center "
      >
        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="3"
          className="flex justify-center w-full mb-10"
        >
          <img src="/EAGLE_LEGEND_STICKY_01.png" alt="Birthday Pic" className="w-[20%]" />
        </div>

        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-3"
          className="flex justify-center w-full mb-10"
        >
          <img src="/EAGLE_LEGEND_STICKY_04_1800x1800.png" alt="Birthday Pic" className="w-[20%]" />
        </div>

        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="3"
          className="flex justify-center w-full mb-10"
        >
          <img src="/Screenshot2025-04-10at5.20.14PM.png" alt="Birthday Pic" className="w-[20%]" />
        </div>

        <div className="flex flex-col justify-left">
          <h3 className="mb-2 text-3xl text-center">Signature Model V2 - Legend Shape</h3>
          <p className="mb-2 text-2xl text-center">Sweets Kendamas</p>
          <p className="mb-10 text-2xl text-center">IN⟷TRANSIT</p>
        </div>
        
      </section>

    </div>
  );
}
