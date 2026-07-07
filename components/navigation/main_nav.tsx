import Link from "next/link";

export default function MainNav() {
  return (
    <header className="fixed z-50 top-0 w-full flex gap-4 justify-between items-center min-h-20 border-b border-white/20 px-4 bg-black/30 backdrop-blur">
      <Link
        href="/"
        className="font-atomicage tracking-tighter text-teal-400 text-2xl flex gap-2 items-center"
      >
        <span className="material-symbols material-symbols-filled">rocket</span>
        P.E.A
      </Link>
      <nav className="flex gap-8 text-cyan-400 font-bold font-outfit">
        <Link href="/about" className="hover:text-teal-300 transition-colors duration-300 p-3">About</Link>
        <Link href="/contact" className="hover:text-teal-300 transition-colors duration-300 p-3">Contact us</Link>
        {/* <a target="_blank" href="https://react.dev/learn/describing-the-ui">Link</a> */}
      </nav>
    </header>
  );
}
