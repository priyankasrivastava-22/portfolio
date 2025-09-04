export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center relative z-10">
      <div className="glass px-12 py-12 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-12 w-full max-w-6xl">
        
        {/* Left Side - Text Content */}
        <div className="flex-1 text-left">
          <p className="text-gray-300 uppercase tracking-wide mb-2">
            Software Developer & DevOps Engineer
          </p>
          <h1 className="whitespace-nowrap text-4xl md:text-5xl font-bold">
            Hi, I'm <span className="text-yellow-400">Priyanka Srivastava</span>
          </h1>
          <p className="text-gray-300 mt-4 leading-relaxed max-w-2xl">
            I build scalable web apps with Java, React, and Node.js, 
            and automate delivery with modern CI/CD.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-black rounded-lg font-medium shadow hover:shadow-lg transition"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-medium shadow hover:bg-yellow-500 transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/profile.png"
            alt="Priyanka Srivastava"
            className="w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-yellow-400 shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
