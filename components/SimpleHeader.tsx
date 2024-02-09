import Link from "next/link";
import ReadingProgerss from "./ReadingProgress";

export function SimpleHeader() {
  return (
    <header className="bg-gray-900 py-4 fixed w-full top-0">
      <div className="mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link  href={'/'} className="text-white text-2xl font-bold max-[405px]:text-base" >Self study in Nextjs</Link>
          <ul className="flex space-x-4">
            <Link href="/" className="text-white hover:text-blue-300">
              Home
            </Link>
            <Link href="/cashing" className="text-white hover:text-blue-300">
              Cashing
            </Link>
           

          </ul>
        </nav>
      </div>
      <ReadingProgerss/>
    </header>
  );
}