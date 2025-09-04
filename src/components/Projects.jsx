// Project cards. Replace placeholder links with your GitHub & live demos.
const PROJECTS = [
{
title: "Library Management System",
desc: "React + Node.js + MySQL. CSV upload, admin dashboard for books & transactions.",
tech: ["React", "Node.js", "MySQL", "Jenkins"],
github: "https://github.com/priyankasrivastava-22/library-management-system-lms-frontend",
demo: "#",
image: "/project-lms.png", // put an image in /public or remove the <img />
},
{
title: "Project Two",
desc: "Describe what the app does, who it's for, and your unique contribution.",
tech: ["Java", "Spring 5", "PL/SQL"],
github: "#",
demo: "#",
image: "/project-2.png",
},
];


export default function Projects() {
return (
<section id="projects" className="section">
<div className="container-fluid">
<h2 className="text-2xl md:text-3xl font-bold mb-6">Projects</h2>
<div className="grid md:grid-cols-2 gap-6">
{PROJECTS.map((p) => (
<article key={p.title} className="glass overflow-hidden">
{p.image && (
<img src={p.image} alt={p.title} className="w-full h-48 object-cover border-b border-white/10" />
)}
<div className="p-6">
<h3 className="text-xl font-semibold">{p.title}</h3>
<p className="mt-2 text-white/80">{p.desc}</p>
<div className="mt-3 flex flex-wrap gap-2">
{p.tech.map((t) => (
<span key={t} className="px-2 py-1 text-xs rounded-full bg-white/10 border border-white/10">{t}</span>
))}
</div>
<div className="mt-5 flex gap-3">
<a href={p.github} target="_blank" rel="noopener" className="px-4 py-2 rounded-lg bg-white/90 text-black font-medium hover:bg-white">GitHub</a>
<a href={p.demo} target="_blank" rel="noopener" className="px-4 py-2 rounded-lg bg-yellow-400 text-black font-medium hover:bg-yellow-300">Live Demo</a>
</div>
</div>
</article>
))}
</div>
</div>
</section>
);
}