import Link from "next/link";

export default function MainNav() {
  return (
    <header className="fixed z-50 top-0 w-full border-b border-white/20 px-4 bg-black/30 backdrop-blur shadow-[0_0_15px_rgba(44,205,166,0.3)]">
      <div className="max-w-7xl mx-auto min-h-20 flex justify-between items-center">
        <Link
          href="/"
          className="font-atomicage tracking-tighter text-teal-300 hover:text-cyan-400  transition-colors duration-300 text-3xl font-bold flex gap-2 items-center"
        >
          <span className="material-symbols material-symbols-filled text-4xl -mt-1">rocket</span>
          P.E.A
        </Link>
        <nav className="flex gap-8 text-cyan-400 font-bold font-outfit">
          <Link href="/about" className="hover:text-teal-300 transition-colors duration-300 p-3">About</Link>
          <Link href="/contact" className="hover:text-teal-300 transition-colors duration-300 p-3">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
