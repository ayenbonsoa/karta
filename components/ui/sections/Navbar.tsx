import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="font-mono uppercase text-gray-900 py-4 px-4 md:px-6 xl:px-0 w-full flex justify-between md:max-w-6xl 2xl:max-w-7xl mx-auto">
      <div className="space-x-20 flex items-center">
        <span>Karta</span>
        <div className="flex space-x-6">
          <ul className="list-none hidden lg:flex space-x-6 items-center">
            <Link
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
              title="Carrières"
              href="carreer"
            >
              Link
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex space-x-3 items-center">
        <button className="lg:hidden">
          <i className="ri-menu-line text-2xl"></i>
        </button>
        <Link
          href="/login"
          className="hidden lg:inline bg-black text-white md:bg-transparent md:text-black px-6 py-2 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-black via-blue-600 to-black"
        >
          <span>Connexion</span>
        </Link>
        <Link
          href="/register"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hidden lg:inline"
        >
          <span>Inscription</span>
        </Link>
      </div>
    </div>
  );
}
