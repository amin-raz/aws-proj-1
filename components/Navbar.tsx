import Link from "next/link";
import { useAuthenticator } from "@aws-amplify/ui-react";

const NavBar = () => {
  const { signOut } = useAuthenticator();
  
  return (
    <nav className="bg-blue-600 p-4 w-full">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h2 className="text-white text-2xl font-bold">GOAT Website</h2>
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-white hover:text-gray-200">Home</Link>
          <Link href="/about" className="text-white hover:text-gray-200">About</Link>
          <button 
            onClick={signOut}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;