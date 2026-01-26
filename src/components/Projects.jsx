const Projects = () => {
  const projects = [
    {
      title: "nodeman (ndm)",
      tag: "System Tool / C11",
      description: "A high-performance Node.js version manager built for multi-user Linux environments. Unlike standard managers, it utilizes system-level pathing to provide isolated environments without shell overhead.",
      features: [
        "Multi-user support via /etc/environment.d",
        "Zero shell-init delay (Set and Forget)",
        "Isolated prefix management in .npmrc",
        "Atomic symlink switching with 'ln -snf'"
      ],
      tech: ["C11", "CMake", "Bash", "POSIX Threads"],
      link: "#" // Taruh link GitHub lo di sini
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#121212] border-t border-[#1E1E1E] font-mono">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-[#81B29A] text-lg mb-12 uppercase font-bold tracking-tighter">
          [ 03. active_projects ]
        </h2>

        {projects.map((p, i) => (
          <div key={i} className="bg-[#1E1E1E] border border-[#333] p-6 md:p-8 rounded-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-[#E0E0E0] text-xl font-bold">{p.title}</h3>
                <span className="text-[#E53935] text-xs">{p.tag}</span>
              </div>
              <a href={p.link} className="text-[#81B29A] hover:underline text-sm">[ view_source ]</a>
            </div>

            <p className="text-[#757575] text-sm mb-6 leading-relaxed">
              {p.description}
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <ul className="space-y-2">
                {p.features.map((f, idx) => (
                  <li key={idx} className="text-[#E0E0E0] text-xs flex items-center">
                    <span className="text-[#81B29A] mr-2">+</span> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {p.tech.map((t, idx) => (
                <span key={idx} className="bg-[#121212] text-[#757575] text-[10px] px-2 py-1 border border-[#333]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
        
        <div className="mt-8 text-center text-[#757575] text-xs italic">
          // More projects coming soon. Currently focused on low-level optimization.
        </div>
      </div>
    </section>
  );
};

export default Projects;