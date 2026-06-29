import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";
import { ContactButton } from "./ContactButton";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
      style={{ background: "#0C0C0C" }}
    >
      {/* Left Top */}
      <FadeIn
        delay={0.1}
        x={-80}
        duration={0.9}
        className="absolute top-[4%] left-[2%] w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
          className="w-full h-auto"
        />
      </FadeIn>

      {/* Left Bottom */}
      <FadeIn
        delay={0.25}
        x={-80}
        duration={0.9}
        className="absolute bottom-[8%] left-[5%] md:left-[8%] w-[100px] sm:w-[140px] md:w-[180px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          className="w-full h-auto"
        />
      </FadeIn>

      {/* Right Top */}
      <FadeIn
        delay={0.15}
        x={80}
        duration={0.9}
        className="absolute top-[4%] right-[2%] w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
          className="w-full h-auto"
        />
      </FadeIn>

      {/* Right Bottom */}
      <FadeIn
        delay={0.3}
        x={80}
        duration={0.9}
        className="absolute bottom-[8%] right-[5%] md:right-[8%] w-[130px] sm:w-[170px] md:w-[220px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          className="w-full h-auto"
        />
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0} y={40} className="relative z-10 text-center">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{
            fontSize: "clamp(3rem,12vw,160px)",
          }}
        >
          ABOUT ME
        </h2>
      </FadeIn>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-16 mt-10 w-full">
        <AnimatedText
          text="I am a Computer Science student at Aravali Institute of Technical Studies, Udaipur, passionate about software development and problem-solving. I enjoy building practical applications, exploring new technologies, and continuously improving my programming skills."
          className="w-full max-w-[950px] mx-auto px-4 sm:px-6 text-center text-[#D7E2EA] font-medium leading-[1.9] whitespace-normal break-normal"
          style={{
            fontSize: "clamp(1rem,1.7vw,1.45rem)",
            wordBreak: "normal",
            overflowWrap: "anywhere",
            hyphens: "none",
          }}
        />

        <ContactButton />
      </div>
    </section>
  );
}
