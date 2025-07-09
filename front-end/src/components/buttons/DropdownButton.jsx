import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState, useRef, useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils//helper";

const DropdownButton = ({ label = "Options", options = [], onSelect }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const handleToggle = () => setOpen((prev) => !prev);
  const handleSelect = (option) => {
    setOpen(false);
    if (onSelect) onSelect(option);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left m-5" ref={dropdownRef}>
      <button
        onClick={handleToggle}
        className="px-4 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition duration-500 w-40"
      >
        <div className="flex items-center justify-between">
          {capitalizeFirstLetter(label)}
          {open ? (
            <ChevronUpIcon className="w-4 h-5" />
          ) : (
            <ChevronDownIcon className="w-4 h-5" />
          )}
        </div>
      </button>

      {open && (
        <div className="absolute left-0 w-40 bg-white border border-gray-200 rounded-xl shadow-md z-10">
          {options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(option)}
              className="w-full text-left px-4 py-2 hover:bg-indigo-200 rounded-xl"
            >
              {capitalizeFirstLetter(option)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
