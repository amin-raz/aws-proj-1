import Link from "next/link";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useState } from "react";

const NavBar = () => {
  const { signOut, user } = useAuthenticator();
  const [showDropdown, setShowDropdown] = useState(false);
  
  return (
    <nav className="bg-blue-600 p-4 w-full">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h2 className="text-white text-2xl font-bold">GOAT Website</h2>
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-white hover:text-gray-200">Home</Link>
          <Link href="/about" className="text-white hover:text-gray-200">About</Link>
          <div className="relative">
            <button 
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
            >
              <span>{user?.username || 'Profile'}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2">
                <div className="px-4 py-2 text-sm text-gray-700 border-b">
                  <div className="font-semibold">Username: {user?.username}</div>
                  <div className="text-xs">{user?.email}</div>
                </div>
                <button 
                  onClick={() => {
                    signOut();
                    setShowDropdown(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;