const Specs = () => {
  const categories = [
    {
      group: "Development Environment",
      items: [
        { label: "Operating System", value: "Arch Linux (Custom XFCE/BlackArch Config)" },
        { label: "Filesystem", value: "Ext4 with Dual-Arch Recovery Setup" },
        { label: "Memory Management", value: "Optimized 700MB Idle | 4GB Pragmatic Swap" },
        { label: "Containerization", value: "Manual Chroot / Arch Tarball (Native over Bloat)" }
      ]
    },
    {
      group: "Toolchain & Logic",
      items: [
        { label: "Compiler Flags", value: "-O2 / -march=native (Performance Oriented)" },
        { label: "Build Systems", value: "CMake & Make (Standard UNIX Workflow)" },
        { label: "Binary Strategy", value: "Dynamic Linking | Cross-compile (x86_64, ARM64, RISCV64)" },
        { label: "Scripting", value: "Bash & AWK for Data Processing" }
      ]
    }
  ];

  return (
    <section id="specs" className="py-20 bg-[#121212] border-t border-[#1E1E1E] font-mono">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-[#81B29A] text-lg mb-12 uppercase font-bold tracking-tighter">
          [ 02. system_specs ]
        </h2>

        <div className="space-y-12">
          {categories.map((cat, i) => (
            <div key={i}>
              <h3 className="text-[#E53935] text-xs mb-4 uppercase tracking-[0.2em]">
                // {cat.group}
              </h3>
              <div className="grid grid-cols-1 gap-1">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row md:justify-between py-2 border-b border-[#1E1E1E] hover:bg-[#1E1E1E] transition-none group">
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

        {/* Note about workflow */}
        <div className="mt-12 p-4 border-l-2 border-[#E53935] bg-[#1E1E1E]/50">
          <p className="text-[#757575] text-xs leading-relaxed">
            <span className="text-[#E0E0E0] font-bold">Workflow Philosophy:</span> I maintain a lean system. 
            Whether it's managing AUR packages with <code className="text-[#81B29A]">yay</code> or 
            debugging via a secondary Arch partition, I prioritize native solutions over heavy abstractions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Specs;