export const PROJECT_DATA = [
  {
    title: "nodeman (ndm)",
    tag: "System Tool / C11",
    description: "A high-performance Node.js version manager built for multi-user Linux environments. Focused on speed, POSIX compliance, and zero-latency shell initialization.",
    features: [
      "Multi-user environment support (/etc/environment.d)",
      "Zero shell-init delay via static symlinking",
      "Isolated prefix management for different Node versions",
      "Atomic switching between versions"
    ],
    tech: ["C11", "CMake", "POSIX Threads", "Bash"],
    link: "github.com/daniwebdevid/nodeman"
  },
  {
    title: "festmark (fsk)",
    tag: "Productivity / Rust",
    description: "A minimalist CLI-based knowledge management tool. Designed for speed and seamless integration with terminal-based editors like Neovim.",
    features: [
      "Unix-style piping and command-line interface",
      "Low-latency file system storage",
      "Configurable editor integration (Nvim/Vim/Nano)",
      "Instant-access write and search modes"
    ],
    tech: ["Rust", "Clap (CLI Parser)", "Standard Process API"],
    link: "github.com/daniwebdevid/festmark"
  },
];
