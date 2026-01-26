import { useState } from 'react'

export default function Navbar(name) {
    return (
<nav class="bg-[#121212] py-3 px-6 flex justify-between items-center border-b border-[#1E1E1E]">
  <div class="font-mono text-sm">
    <span class="text-[#81B29A]">Dany_Saputra</span><span class="text-[#757575]">@</span><span class="text-[#E53935]">portfolio</span>
    <span class="text-[#E0E0E0]">:~$</span>
  </div>

  <div class="flex space-x-5 md:space-x-8 font-mono text-[10px] md:text-xs">
    <a href="#about" class="text-[#757575] hover:text-[#E0E0E0] tracking-tighter">[ 01. about ]</a>
    <a href="#specs" class="text-[#757575] hover:text-[#E0E0E0] tracking-tighter">[ 02. specs ]</a>
    <a href="#projects" class="text-[#757575] hover:text-[#E0E0E0] tracking-tighter">[ 03. projects ]</a>
    <a href="#contact" class="text-[#E53935] hover:underline tracking-tighter">[ 04. contact ]</a>
  </div>
</nav>
    )
}