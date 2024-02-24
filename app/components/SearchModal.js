"use client";
import React, { useState } from "react";

export default function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Handle search logic here
    console.log("Searching for:", searchTerm);
  };
  return (
    <div>
      {/* <div className="fixed inset-0 flex items-center justify-center bg-[#000000da]">
        <div className="w-1/2 flex justify-center">
          <input
            type="text"
            className="w-full border border-white px-3 py-8 outline-none bg-[#ffffff8a] rounded-full"
            placeholder="SEARCH PRODUCTS"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div> */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
          <div className="w-1/2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold"></h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={onClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <input
              type="text"
              className="w-full border border-white px-3 py-8 outline-none bg-[#ffffff8a] rounded-full"
              placeholder="SEARCH PRODUCTS"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
