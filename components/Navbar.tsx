import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h2 className="text-white text-2xl font-bold">GOAT Website</h2>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-gray-200">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-200">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;