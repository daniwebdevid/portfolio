function AboutMe() {
  return (
    <section id="about" className="py-20 bg-[#121212] font-mono">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header ala Terminal */}
        <div className="flex items-center space-x-2 mb-8 text-[#757575]">
          <span className="text-[#81B29A]">➜</span>
          <span className="text-[#E0E0E0]">whoami</span>
          <span className="opacity-50"># Developer profile & focus</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Narrative */}
          <div className="md:col-span-8 text-[#E0E0E0] leading-relaxed">
            <p className="mb-4">
              I am a <span className="text-[#81B29A]">Software Developer</span> with a deep interest in system-level programming and automation. I focus on building tools that are fast, lightweight, and actually solve real-world problems in the <span className="text-[#E53935]">Linux</span> ecosystem.
            </p>
            <p className="mb-4">
              My philosophy is simple: <span className="text-[#81B29A]">Code should be efficient and maintainable.</span> While I enjoy working with low-level languages like <span className="text-[#E53935]">C</span> for performance, I prioritize writing clean logic that other developers can understand and build upon.
            </p>
            <p>
              I believe great software doesn't have to be complicated. Currently, I'm developing <span className="text-[#81B29A]">NDM (Node Manager)</span>—a project aimed at simplifying system management without the usual overhead, making Linux power more accessible to everyone.
            </p>
          </div>

          {/* Quick Stats / Sidebar */}
          <div className="md:col-span-4 bg-[#1E1E1E] p-5 border border-[#333] rounded-sm">
            <h3 className="text-[#81B29A] text-xs font-bold uppercase tracking-widest mb-4">
              Overview
            </h3>
            <ul className="text-xs space-y-3 text-[#757575]">
              <li>
                <span className="text-[#E0E0E0] block font-bold">Specialization</span>
                System Automation & CLI Tools
              </li>
              <li>
                <span className="text-[#E0E0E0] block font-bold">Core Skills</span>
                C, Bash Scripting, Linux Admin
              </li>
              <li>
                <span className="text-[#E0E0E0] block font-bold">Values</span>
                Performance & Simplicity
              </li>
              <li>
                <span className="text-[#E0E0E0] block font-bold">Current Path</span>
                SMK Student & OSS Enthusiast
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;