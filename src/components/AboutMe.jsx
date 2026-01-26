function AboutMe()  {
  return (
    <section id="about" className="py-20 bg-[#121212] font-mono">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header ala Terminal */}
        <div className="flex items-center space-x-2 mb-8 text-[#757575]">
          <span className="text-[#81B29A]">➜</span>
          <span className="text-[#E0E0E0]">whoami</span>
          <span className="opacity-50"># Brief technical background</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Narrative */}
          <div className="md:col-span-8 text-[#E0E0E0] leading-relaxed">
            <p className="mb-4">
              I am a <span className="text-[#81B29A]">System Engineer</span> enthusiast who prioritizes 
              freedom and control over abstraction. My workflow is built on <span className="text-[#E53935]">Arch Linux</span> and <span className="text-[#E53935]">C11</span>, where every byte and CPU cycle matters.
            </p>
            <p className="mb-4">
              To me, "Technical" means every line of code must carry weight. I don't follow trends; 
              I follow efficiency. This mindset led me to build my own tools—from custom Node version managers 
              to manual memory management systems—ensuring that my environment remains lean and high-performance.
            </p>
            <p>
              When a system breaks, I don't reinstall; I debug from the recovery environment. 
              I'm not here to build "pretty" things that are heavy—I'm here to build robust systems 
              that work exactly as intended.
            </p>
          </div>

          {/* Quick Specs / Sidebar */}
          <div className="md:col-span-4 bg-[#1E1E1E] p-5 border border-[#333] rounded-sm">
            <h3 className="text-[#81B29A] text-xs font-bold uppercase tracking-widest mb-4">
              System Specs
            </h3>
            <ul className="text-xs space-y-3 text-[#757575]">
              <li>
                <span className="text-[#E0E0E0] block font-bold">OS</span>
                Arch Linux / XFCE (BlackArch config)
              </li>
              <li>
                <span className="text-[#E0E0E0] block font-bold">Toolchain</span>
                GCC, CMake, Bash, Systemd
              </li>
              <li>
                <span className="text-[#E0E0E0] block font-bold">Philosophy</span>
                K&R Style, Tab Indent, Manual Malloc
              </li>
              <li>
                <span className="text-[#E0E0E0] block font-bold">Status</span>
                Looking for System Engineering roles
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;