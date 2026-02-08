function AboutMe() {
  return (
    <section id="about" className="py-20 bg-[#121212] font-mono">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header ala Terminal */}
        <div className="flex items-center space-x-2 mb-8 text-[#757575]">
          <span className="text-[#81B29A]">➜</span>
          <span className="text-[#E0E0E0]">whoami</span>
          <span className="opacity-50"># System-level identity & mission</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Narrative */}
          <div className="md:col-span-8 text-[#E0E0E0] leading-relaxed">
            <p className="mb-4">
              I am a <span className="text-[#81B29A]">System Programmer</span> who prefers working close to the metal. I value clarity over thick abstractions, focusing on building high-performance tooling for the <span className="text-[#E53935]">Linux</span> ecosystem.
            </p>
            <p className="mb-4">
              My approach to code is inspired by <span className="text-[#81B29A]">Aviation Safety standards</span>. I treat every line of code like a flight-critical system—ensuring integrity, rigorous error handling, and reliability. If it can be done in <span className="text-[#E53935]">C</span> with zero overhead, that is the path I take.
            </p>
            <p>
              I believe Linux power shouldn't be gatekept by complexity. My mission is to build robust, efficient tools like <span className="text-[#81B29A]">NDM (Node Manager)</span> to make the system more accessible and user-friendly without sacrificing raw performance.
            </p>
          </div>

          {/* Quick Specs / Sidebar */}
          <div className="md:col-span-4 bg-[#1E1E1E] p-5 border border-[#333] rounded-sm">
            <h3 className="text-[#81B29A] text-xs font-bold uppercase tracking-widest mb-4">
              System Specs
            </h3>
            <ul className="text-xs space-y-3 text-[#757575]">
              <li>
                <span className="text-[#E0E0E0] block font-bold">Primary Focus</span>
                System Tooling & Linux Internals
              </li>
              <li>
                <span className="text-[#E0E0E0] block font-bold">Toolchain</span>
                C11, POSIX, GCC, CMake
              </li>
              <li>
                <span className="text-[#E0E0E0] block font-bold">Philosophy</span>
                Efficiency, Reliability, User-Centricity
              </li>
              <li>
                <span className="text-[#E0E0E0] block font-bold">Status</span>
                SMK Student & Open Source Contributor
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;