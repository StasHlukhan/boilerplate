import React, { useRef, useEffect, ReactNode } from 'react';

interface DropdownProps {
  isOpen: boolean;
  toggleDropdown: () => void;
  content: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen, toggleDropdown, content }) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      toggleDropdown();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className={`${isOpen ? 'opacity-100 ' : ' opacity-0 overflow-hidden'} absolute  right-0 mt-2 bg-white border border-gray-300 duration-300  shadow-md`}>
      {content}
    </div>
  );
  }  

export default Dropdown;
