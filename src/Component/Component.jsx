import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

// Custom Dropdown Component
export const Dropdown = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative inline-block">
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="absolute z-20 mt-1 right-0 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
            {children}
          </div>
        </>
      )}
    </div>
  );
};

// Checkbox Component
export const Checkbox = ({ checked, onChange, className = "" }) => {
  return (
    <div 
      className={`w-5 h-5 border ${checked ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-300'} rounded flex items-center justify-center cursor-pointer ${className}`}
      onClick={onChange}
    >
      {checked && (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </div>
  );
};

// Avatar Component
export const Avatar = ({ children, className = "" }) => {
  return (
    <div className={`flex items-center justify-center rounded-full ${className}`}>
      {children}
    </div>
  );
};

// Select Component
export const Select = ({ value, options, onChange }) => {
  return (
    <Dropdown
      trigger={
        <button className="ml-2 px-3 py-1 border border-gray-300 rounded-md flex items-center text-sm">
          {value} <ChevronDown className="h-4 w-4 ml-1" />
        </button>
      }
    >
      <div className="py-1">
        {options.map((option) => (
          <button 
            key={option} 
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </Dropdown>
  );
};

// Loading Skeleton Component (Minimal)
export const TableSkeleton = () => (
  <div className="space-y-2 px-4 py-2">
    <div className="h-8 w-full bg-gray-100 rounded animate-pulse"></div>
    <div className="h-8 w-full bg-gray-100 rounded animate-pulse"></div>
    <div className="h-8 w-full bg-gray-100 rounded animate-pulse"></div>
  </div>
);

// Empty State Component
export const EmptyState = ({ tabName }) => (
  <div className="flex items-center justify-center h-64 bg-white rounded-lg shadow">
    <p className="text-gray-500">No {tabName} articles found</p>
  </div>
);