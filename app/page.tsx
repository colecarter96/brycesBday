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
            <Image
              src="/IMG_1309-min.png"
              alt="Birthday Pic"
              width={800}
              height={800}
              className="w-[40%] h-auto object-cover"
              priority
            />
          </div>

          {/* Second image: stick to bottom */}
          <div className="flex flex-col justify-center items-center space-y-20 w-[50%] h-full">
            <Image
                src="/Untitled design (10)-min.png"
                alt="Birthday Pic"
                width={600}
                height={600}
                className="w-[30%]  ml-40 h-auto object-cover"
                priority
              />
            
            <Image
              src="/IMG_8149-min.png"
              alt="Birthday Pic"
              width={800}
              height={800}
              className="w-[30%] h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Text overlay */}
        <h1
          data-scroll
          data-scroll-speed="-4"
          className="text-7xl font-bold z-10"
          style={{ transformOrigin: "center" }}
        >
          Happy Birthday!
        </h1>

        {/* Optional small subtitle with scale effect */}
        <p
          data-scroll
          data-scroll-speed="-5"
          className="mt-20 text-4xl z-10"
          style={{ transformOrigin: "center" }}
        >
          I can&apos;t believe you&apos;re 20 bro...
        </p>
      </section>

      <section
        data-scroll-section
        className="h-screen flex flex-col items-center justify-center bg-white text-black"
      >

        <span className="absolute top-8 left-8 text-6xl">↖</span>
        <span className="absolute top-8 right-8 text-6xl">↗</span>
        <span className="absolute bottom-8 left-8 text-6xl">↙</span>
        <span className="absolute bottom-8 right-8 text-6xl">↘</span>

        <h1 data-scroll data-scroll-speed="2" className="text-7xl mr-50 font-bold">
          Bryce...
        </h1>
        <p data-scroll data-scroll-speed="-1" className="mt-10 ml-150 text-5xl">
          You are my kid brother  
        </p>
      </section>


      
      <section
        data-scroll-section
        className="h-screen flex items-center bg-black text-white overflow-hidden"
      >

        <span className="absolute text-white top-8 left-8 text-6xl">+</span>
        <span className="absolute text-white top-8 right-8 text-6xl">+</span>
        <span className="absolute text-white bottom-8 left-8 text-6xl">+</span>
        <span className="absolute text-white bottom-8 right-8 text-6xl">+</span>

        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="3"
          className="text-6xl whitespace-nowrap ml-20"
        >
          We have been learning new stuff since we were little kids
        </div>
      </section>


      

      

      <section
        data-scroll-section
        className="h-screen flex flex-col items-center justify-center bg-white text-black"
      >

        <span className="absolute top-8 left-8 text-6xl">↖</span>
        <span className="absolute top-8 right-8 text-6xl">↗</span>
        <span className="absolute bottom-8 left-8 text-6xl">↙</span>
        <span className="absolute bottom-8 right-8 text-6xl">↘</span>
        
        <p data-scroll data-scroll-speed="-5" className="mt-10 text-6xl">
          Everything from surfing,
        </p>
        <p data-scroll data-scroll-speed="-5" className="mt-10 text-6xl">
          to skating,
        </p>
        <p data-scroll data-scroll-speed="-5" className="mt-10 text-6xl">
          to kendama,
        </p>
        <p data-scroll data-scroll-speed="-5" className="mt-10 text-6xl">
          to wake surfing,
        </p>
      </section>

      <section
        data-scroll-section
        className="h-screen flex items-center overflow-hidden bg-black"
      >

        <span className="absolute text-white top-8 left-8 text-6xl">+</span>
        <span className="absolute text-white top-8 right-8 text-6xl">+</span>
        <span className="absolute text-white bottom-8 left-8 text-6xl">+</span>
        <span className="absolute text-white bottom-8 right-8 text-6xl">+</span>

        <div className="w-full overflow-hidden">
          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-3"
            className="inline-block ml-10 text-6xl whitespace-nowrap text-white"
          >
            So, when it came to your gift this year...
          </div>
        </div>
      </section>

      <section
        data-scroll-section
        className="h-screen flex items-center overflow-hidden bg-white text-black"
      >

        <span className="absolute top-8 left-8 text-6xl">↖</span>
        <span className="absolute top-8 right-8 text-6xl">↗</span>
        <span className="absolute bottom-8 left-8 text-6xl">↙</span>
        <span className="absolute bottom-8 right-8 text-6xl">↘</span>

        <div className="w-full text-right overflow-hidden">
          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="3"
            className="inline-block mr-10 text-6xl whitespace-nowrap"
          >
            I had to throw it back
          </div>
        </div>
      </section>

      <section
        data-scroll-section
        className="h-[80vh] flex items-center justify-center bg-blue-600 text-white shadow-2xl"
      >
        <span className="absolute top-8 left-8 text-6xl">+</span>
        <span className="absolute top-8 right-8 text-6xl">+</span>
        <span className="absolute bottom-8 left-8 text-6xl">+</span>
        <span className="absolute bottom-8 right-8 text-6xl">+</span>


        <div
          data-scroll
          data-scroll-sticky
          data-scroll-target="#sticky-target"
          className="text-6xl"
        >
          Let&apos;s play a game of KEN ↓
        </div>
      </section>

      <section
        id="sticky-target"
        data-scroll-section
        className="h-[180vh] w-full bg-white flex"
      >
        {/* Left side - sticky text */}
        <div 
          data-scroll
          data-scroll-speed="-5"
          className="w-1/2 flex items-center justify-center"
          style={{ transformOrigin: "center" }}
        >
          <div className="sticky top-1/2 -translate-y-1/2">
            <h3 className="mb-2 text-3xl">Signature Model V2 - Legend Shape</h3>
            <p className="mb-2 text-2xl">Sweets Kendamas</p>
            <p className="mb-10 text-2xl">IN⟷TRANSIT</p>
          </div>
        </div>

        {/* Right side - scrolling images */}
        <div className="w-1/2 flex flex-col items-center justify-center">
          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="3"
            className="flex justify-center w-full mb-10"
          >
            <Image
              src="/EAGLE_LEGEND_STICKY_01.png"
              alt="Birthday Pic"
              width={800}
              height={800}
              className="w-[60%] h-auto"
            />
          </div>

          <div
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-3"
            className="flex justify-center w-full mb-10"
          >
            <Image
              src="/EAGLE_LEGEND_STICKY_04_1800x1800.png"
              alt="Birthday Pic"
              width={800}
              height={800}
              className="w-[60%] h-auto"
            />
          </div>
        </div>
      </section>


    </div>
  );
}
