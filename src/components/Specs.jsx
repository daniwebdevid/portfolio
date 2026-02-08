const EngineeringPhilosophy = () => {
  const categories = [
    {
      group: "Systems & Infrastructure",
      items: [
        { label: "Kernel / OS", value: "Linux Power User (Arch/Unix-like Environments)" },
        { label: "Virtualization", value: "Native Containers & Chroot (Minimalist Abstraction)" },
        { label: "Filesystem & IO", value: "Data Integrity & Recovery Management (Ext4/Btrfs)" },
        { label: "Automation", value: "Bash, AWK, & POSIX-compliant Shell Scripting" }
      ]
    },
    {
      group: "Toolchain & Performance",
      items: [
        { label: "Build Systems", value: "C-family Toolchains (CMake, Make, Ninja)" },
        { label: "Optimization", value: "Low-level Performance Tuning (-O2 / Native Arch)" },
        { label: "Deployment", value: "Cross-platform Binaries (x86_64, ARM64, RISC-V)" },
        { label: "Version Control", value: "Advanced Git (Atomic Commits, Submodules)" }
      ]
    }
  ];

  return (
    <section id="engineering-standards" className="py-20 bg-[#121212] border-t border-[#1E1E1E] font-mono">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-[#81B29A] text-lg mb-12 uppercase font-bold tracking-tighter">
          [ 02. engineering_standards ]
        </h2>

        <div className="space-y-12">
          {categories.map((cat, i) => (
            <div key={i}>
              <h3 className="text-[#E53935] text-xs mb-4 uppercase tracking-[0.2em]">
                // {cat.group}
              </h3>
              <div className="grid grid-cols-1 gap-1">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row md:justify-between py-2 border-b border-[#1E1E1E] hover:bg-[#1E1E1E] transition-all group">
                    <span className="text-[#757575] text-sm group-hover:text-[#81B29A]">
                      {item.label}
                    </span>
                    <span className="text-[#E0E0E0] text-sm">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Philosophy */}
        <div className="mt-12 p-4 border-l-2 border-[#E53935] bg-[#1E1E1E]/50">
          <p className="text-[#757575] text-xs leading-relaxed uppercase tracking-widest mb-2 font-bold">
            Workflow Philosophy:
          </p>
          <p className="text-[#E0E0E0] text-sm leading-relaxed">
            I prioritize <span className="text-[#81B29A]">lean systems</span> and native solutions over heavy abstractions. 
            From managing custom toolchains to cross-compilation for ARM/RISC-V, 
            I build environments that are performant by default, not by accident.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EngineeringPhilosophy;