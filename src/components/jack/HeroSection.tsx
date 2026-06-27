import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";
import { ContactButton } from "./ContactButton";
import harshPortrait from "@/assets/harsh-portrait.png";

const NAV_LINKS = [
  "About",
  "Skills",
  "Services",
  "Projects",
  "Contact",
];

export function HeroSection() {
  return (
    <section
      className="h-screen flex flex-col relative"
      style={{ overflowX: "clip" }}
    >
      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 relative z-20"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="
              text-[#D7E2EA]
              font-medium
              uppercase
              tracking-wider
              text-sm
              md:text-lg
              lg:text-[1.4rem]
              hover:opacity-70
              transition-opacity
              duration-200
            "
          >
            {link}
          </a>
        ))}
      </FadeIn>

{/* Title */}
<div className="overflow-visible mt-6 sm:mt-4 md:-mt-5 px-4">
  <FadeIn delay={0.15} y={40}>
    <h1
      className="
        hero-heading
        font-black
        uppercase
        tracking-tight
        leading-none
        w-full
        text-center
        text-[9vw]
        sm:text-[10vw]
        md:text-[11vw]
        lg:text-[12vw]
      "
      style={{
        transform: "scaleX(1.03)",
      }}
    >
      Hi, I&apos;m Harsh
    </h1>
  </FadeIn>
</div>
      {/* Description + Button */}
      <div
        className="
          mt-auto
          flex
          justify-between
          items-end
          pb-7
          sm:pb-8
          md:pb-10
          px-6
          md:px-10
          relative
          z-20
        "
      >
        <FadeIn delay={0.35} y={20}>
          <p
            className="
              text-[#D7E2EA]
              font-light
              uppercase
              tracking-wide
              leading-snug
              max-w-[160px]
              sm:max-w-[220px]
              md:max-w-[260px]
            "
            style={{
              fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)",
            }}
          >
            Computer Science Student & Software Developer
            <br />
            Building Practical, Modern Applications
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Portrait */}
      <FadeIn
        delay={0.6}
        y={30}
        className="
          absolute
          left-1/2
          -translate-x-1/2
          z-10
          top-1/2
          -translate-y-1/2
          sm:top-auto
          sm:translate-y-0
          sm:bottom-0
          w-[180px]
          sm:w-[220px]
          md:w-[270px]
          lg:w-[320px]
          flex
          justify-center
          items-center
        "
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src={harshPortrait}
            alt="Harsh Trivedi portrait"
            className="w-full h-auto select-none pointer-events-none rounded-full"
            draggable={false}
          />
        </Magnet>
      </FadeIn>
    </section>
  );
}