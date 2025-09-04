// Sticky, semi-transparent navbar with anchor links to sections.
import { useState, useEffect } from "react";


export default function Navbar() {
const [scrolled, setScrolled] = useState(false);


useEffect(() => {
const onScroll = () => setScrolled(window.scrollY > 10);
window.addEventListener("scroll", onScroll);
return () => window.removeEventListener("scroll", onScroll);
}, []);


return (
<header
className={`fixed top-0 inset-x-0 z-50 transition-all ${
scrolled ? "backdrop-blur bg-black/30 border-b border-white/10" : "bg-transparent"
}`}
>
<nav className="container-fluid flex items-center justify-between py-3">
{/* Brand */}
<a href="#home" className="font-semibold tracking-wide">Priyanka</a>


{/* Links */}
<ul className="hidden md:flex gap-6 text-sm">
<li><a className="hover:opacity-80" href="#about">About</a></li>
<li><a className="hover:opacity-80" href="#skills">Skills</a></li>
<li><a className="hover:opacity-80" href="#projects">Projects</a></li>
<li><a className="hover:opacity-80" href="#contact">Contact</a></li>
</ul>


{/* Resume button */}
<a
href="/resume.pdf"
target="_blank"
rel="noopener noreferrer"
className="hidden md:inline-block bg-yellow-400 text-black px-4 py-2 rounded-xl font-medium hover:bg-yellow-300"
>
Resume
</a>
</nav>
</header>
);
}