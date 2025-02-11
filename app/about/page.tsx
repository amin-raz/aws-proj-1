"use client";

import React from "react";
import '/styles/tailwind.css';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 p-4">
        <h1 className="text-3xl font-bold text-white text-center">About Us</h1>
      </header>

      {/* Main Content */}
      <main className="p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Learn More About Our Mission
        </h2>
        <p className="text-gray-600">
          This is the About page. Here, you can describe your website's purpose and mission.
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 p-4 mt-10 text-center text-white">
        <p>&copy; 2025 My Awesome Website</p>
      </footer>
    </div>
  );
}
