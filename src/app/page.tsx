// src/app/page.tsx
"use client";
import { useState } from 'react';

export default function LocationForm() {
  const [location, setLocation] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/process-location', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ location }),
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-gray-800 shadow-md rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-semibold text-white mb-6 text-center">
          SolarVista Location Analyzer
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter a location"
            className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-700 text-white placeholder-gray-400"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-4 py-2 rounded-md font-semibold hover:shadow-lg transition-transform transform hover:scale-105"
          >
            Submit
          </button>
        </form>

        {result && (
          <div className="mt-6 p-4 bg-gray-700 border border-gray-600 rounded-md text-white">
            <h3 className="text-lg font-semibold">
              Response from Server:
            </h3>
            <pre className="bg-gray-800 p-2 mt-2 rounded-md overflow-x-auto text-sm">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
