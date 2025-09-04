// Minimal footer.
export default function Footer() {
  return (
    <footer className="py-8 text-center text-white/60">
      <div className="container-fluid">
        <p>
          © {new Date().getFullYear()} Priyanka Srivastava • Built with React & Tailwind
        </p>
      </div>
    </footer>
  );
}
