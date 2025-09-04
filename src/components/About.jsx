// About.jsx
// A short intro section about you.

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-fluid">
        <div className="glass p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About Me</h2>
          <p className="text-white/80 leading-relaxed">
            Hi, I’m <span className="text-yellow-300 font-semibold">Priyanka Srivastava</span>, 
            a passionate Software Developer and DevOps Engineer.  
            I enjoy building scalable web applications with React, Node.js, and Java, 
            and automating delivery with modern CI/CD tools.
          </p>
        </div>
      </div>
    </section>
  );
}
