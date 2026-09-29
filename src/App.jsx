import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef(null);
  const objectRef = useRef(null);

  useEffect(() => {
    
    const ctx = gsap.context(() => {
      // Initial headline animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
      });

      

      // Statistics animation
      gsap.from(".stat", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.5,
        ease: "power2.out",
      });

    
      // Scroll-driven object animation
      gsap.to(objectRef.current, {
        x: 260,
        y: 430,
        rotation: 120,
        scale: 1.35,
      
        ease: "none",
      
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative h-screen overflow-hidden bg-[#f2efe8] text-black"
      >
        {/* Heading */}
        <div className="absolute top-16 left-0 w-full text-center px-6">
          <h1
            ref={titleRef}
            className="
  hero-title
  text-3xl
  sm:text-5xl
  md:text-7xl
  lg:text-8xl
  font-bold
  tracking-[0.12em]
  leading-[0.95]
  px-4
"
          >
            WELCOME ITZFIZZ
          </h1>
        </div>

        {/* Statistics */}
        <div
  ref={statsRef}
  className="absolute bottom-16 left-0 w-full px-8 md:px-12"
>
  <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">

    <div className="stat">
      <p className="text-4xl md:text-5xl lg:text-6xl font-bold">
        87%
      </p>

      <p className="mt-2 text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.15em]">
        Customer Engagement
      </p>
    </div>

    <div className="stat">
      <p className="text-4xl md:text-5xl lg:text-6xl font-bold">
        92%
      </p>

      <p className="mt-2 text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.15em]">
        Brand Growth
      </p>
    </div>

    <div className="stat">
      <p className="text-4xl md:text-5xl lg:text-6xl font-bold">
        76%
      </p>

      <p className="mt-2 text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.15em]">
        Digital Impact
      </p>
    </div>

  </div>
</div>

        {/* Main visual */}
        <div
  ref={objectRef}
  className="
  absolute
  left-1/2
  top-[46%]
  -translate-x-1/2
  -translate-y-1/2
"
>
  <div className="relative w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72">

    {/* Main object */}
    <div
      className="
        absolute inset-0
        rounded-[38%]
        rotate-12
        bg-gradient-to-br
        from-neutral-950
        via-neutral-700
        to-black
        shadow-[0_35px_80px_rgba(0,0,0,0.35)]
      "
    >
      {/* Inner glass */}
      <div
        className="
          absolute inset-5
          rounded-[34%]
          bg-gradient-to-br
          from-white/20
          via-white/5
          to-transparent
          border border-white/20
        "
      />

      {/* Highlight */}
      <div
        className="
          absolute
          top-8
          left-10
          w-20
          h-8
          rounded-full
          bg-white/20
          blur-md
          rotate-[-25deg]
        "
      />

      {/* FIZZ logo */}
      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          text-white
          text-5xl
          md:text-6xl
          font-black
          tracking-[-0.08em]
        "
      >
        F
      </div>
    </div>

    {/* Floating ring */}
    <div
      className="
        absolute
        -inset-5
        rounded-full
        border
        border-black/20
        rotate-[-18deg]
      "
    />

    {/* Small floating dot */}
    <div
      className="
        absolute
        -top-5
        right-2
        w-5
        h-5
        rounded-full
        bg-black
      "
    />

  </div>
</div>

        {/* Scroll indicator */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em]">
          Scroll
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden">
  
  {/* Background decorative circles */}
  <div className="absolute top-20 left-10 w-40 h-40 rounded-full border border-white/10" />
  
  <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full border border-white/10" />

  <div className="relative z-10 max-w-4xl text-center">

    <p className="text-xs md:text-sm uppercase tracking-[0.5em] text-white/40 mb-8">
      Keep Exploring
    </p>

    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
      BUILT
      <br />
      FOR IMPACT
    </h2>

    <p className="mt-8 max-w-xl mx-auto text-sm md:text-base text-white/50 leading-relaxed">
      A scroll-driven digital experience designed with React,
      Tailwind CSS and GSAP. Every movement responds directly
      to the user's interaction.
    </p>

    <div className="mt-12 flex justify-center gap-3">
      <span className="px-5 py-2 rounded-full border border-white/20 text-xs uppercase tracking-widest">
        React
      </span>

      <span className="px-5 py-2 rounded-full border border-white/20 text-xs uppercase tracking-widest">
        GSAP
      </span>

      <span className="px-5 py-2 rounded-full border border-white/20 text-xs uppercase tracking-widest">
        Tailwind
      </span>
    </div>

  </div>
</section>
    </main>
  );
}

export default App;