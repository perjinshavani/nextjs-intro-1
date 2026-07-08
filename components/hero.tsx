import Image from "next/image";

interface buttonProps {
  link: string;
  children: React.ReactNode;
  className?: string;
}

function Button({ link, children, className }: buttonProps) {
  const defaultClassName =
    "bg-teal-400 text-zinc-950 hover:-translate-y-0.5 motion-safe:transition-transform motion-safe:duration-300 hover:shadow-[0_0_20px_rgba(44,205,166,0.4)]";
  return (
    <a
      className={`px-8 py-4 flex gap-2 justify-center items-center uppercase font-bold rounded-xl active:scale-95 ${className ? className : defaultClassName}`}
      href={link}
    >
      {children}
    </a>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-4 py-16 bg-radial-[at_50%_45%] from-violet-900/40 from-20% via-cyan-900/20 via-45% to-black to-70%">
      <header className="relative z-10 px-4 max-w-2xl mx-auto space-y-10">
        <div className="inline-flex items-center justify-center p-4 rounded-full bg-teal-400/10 border border-teal-400/30 mb-6 motion-safe:animate-bounce shadow-[0_0_20px_rgba(44,205,166,0.2)]">
          <span className="material-symbols material-symbols-filled text-4xl text-teal-300">
            rocket
          </span>
        </div>
        <h1 className="font-extrabold font-outfit text-zinc-200 text-6xl text-balance leading-none">
          Welcome to <span className="text-teal-400">Planet Express</span>{" "}
          Academy
        </h1>
        <p className="text-lg text-zinc-300 text-pretty">
          Master the art of intergalactic delivery, advanced propulsion physics,
          and avoiding Zapp Brannigan's tactical incompetence. Your journey to
          the 31st century starts here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button link="/enroll" className="">
            Enroll now
            <span className="material-symbols material-symbols-outlined text-2xl">
              bolt
            </span>
          </Button>
          <Button
            link="/classes"
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/20"
          >
            View Classes
          </Button>
        </div>
      </header>

      <Image
        className="w-full h-auto object-cover inset-0 z-0 opacity-40"
        src="/space.png"
        fill
        alt=""
        loading="eager"
      />
    </section>
  );
}
