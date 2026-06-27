import harshPortrait from "@/assets/harsh-portrait.png";

export function ProjectShowcase() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-red-900/20 to-black rounded-[30px] border border-red-500/30 overflow-hidden p-8 md:p-12">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full gap-8">
        {/* Text section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white/80 font-light text-lg italic">
            Hi, I'm Harsh
          </h3>
          <p className="text-red-400 font-medium text-xl md:text-2xl">
            I'm a Frontend Developer
          </p>
          <p className="text-white/60 text-sm max-w-xs leading-relaxed">
            Building practical, modern applications with clean code and great design
          </p>
        </div>

        {/* Image section */}
        <div className="relative w-32 h-40 md:w-40 md:h-48 flex-shrink-0">
          <div className="absolute inset-0 bg-white rounded-lg overflow-hidden border-2 border-white/20">
            <img
              src={harshPortrait}
              alt="Harsh Trivedi"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
