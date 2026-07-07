import Link from "next/link";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <Link
          href="/"
          className="font-rubik tracking-tighter text-teal-400"
        >
          About layout
        </Link>
        <nav>
          <Link href="/about">About</Link>
          {/* <a target="_blank" href="https://react.dev/learn/describing-the-ui">Link</a> */}
        </nav>
      </header>
      {children}
    </>
  );
}
