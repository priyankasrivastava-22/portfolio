// Contact block with direct links and a simple (mailto) button.
export default function Contact() {
return (
<section id="contact" className="section">
<div className="container-fluid grid md:grid-cols-2 gap-6">
<div className="glass p-8">
<h2 className="text-2xl md:text-3xl font-bold mb-4">Get in touch</h2>
<p className="text-white/80">
Reach out for opportunities, collaborations, or just to say hi.
</p>
<div className="mt-6 space-y-2 text-white/90">
<p>Email: <a className="underline" href="mailto:your.email@example.com">your.email@example.com</a></p>
<p>LinkedIn: <a className="underline" target="_blank" rel="noopener" href="https://linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a></p>
<p>GitHub: <a className="underline" target="_blank" rel="noopener" href="https://github.com/priyankasrivastava-22">github.com/priyankasrivastava-22</a></p>
</div>
<a
href="mailto:your.email@example.com?subject=Let's%20work%20together&body=Hi%20Priyanka,%20I%20found%20your%20portfolio..."
className="mt-6 inline-block bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300"
>
Say Hello
</a>
</div>


<div className="glass p-8">
<h3 className="text-xl font-semibold mb-4">What I’m looking for</h3>
<ul className="list-disc pl-5 space-y-2 text-white/80">
<li>Full‑stack development roles (React / Node.js / Java)</li>
<li>DevOps opportunities (CI/CD, Jenkins, Linux)</li>
<li>Roles where I can grow and contribute to delivery</li>
</ul>
</div>
</div>
</section>
);
}