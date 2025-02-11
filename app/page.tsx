"use client";

import { useAuthenticator } from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import '../styles/tailwind.css';

const client = generateClient<Schema>();

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 p-4">
        <h1 className="text-3xl font-bold text-white text-center">
          Welcome to My Home Page
        </h1>
      </header>

      {/* Main Content */}
      <main className="p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          This is the main content area!
        </h2>
        <p className="text-gray-600 mb-6">
          Explore the features of this website and enjoy the experience.
        </p>

        {/* Buttons */}
        <div className="space-x-4">
          <button 
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
          >
            Test Button
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 p-4 mt-auto text-center text-white">
        <p>&copy; 2025 My Awesome Website</p>
      </footer>
    </div>
  );
}