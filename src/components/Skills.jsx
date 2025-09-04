// Skill chips in a responsive grid.
const SKILLS = {
Programming: ["Java", "JavaScript", "Python"],
Frontend: ["React", "HTML", "CSS"],
Backend: ["Node.js", "Spring 5", "PL/SQL"],
DevOps: ["Jenkins", "Git", "RHEL", "Ansible"],
Databases: ["MySQL", "PostgreSQL"],
};


export default function Skills() {
return (
<section id="skills" className="section">
<div className="container-fluid">
<div className="glass p-8">
<h2 className="text-2xl md:text-3xl font-bold mb-6">Skills</h2>
<div className="grid md:grid-cols-2 gap-6">
{Object.entries(SKILLS).map(([group, items]) => (
<div key={group}>
<h3 className="font-semibold mb-2 text-white/90">{group}</h3>
<div className="flex flex-wrap gap-2">
{items.map((s) => (
<span key={s} className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm">
{s}
</span>
))}
</div>
</div>
))}
</div>
</div>
</div>
</section>
);
}