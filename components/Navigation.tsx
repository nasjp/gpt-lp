import React, { useState } from "react";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <button
        className="fixed top-3 right-3 block lg:hidden text-gray-600 hover:text-gray-800 focus:outline-none z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="h-6 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              fillRule="evenodd"
              d="M12 2a1 1 0 011 1v8a1 1 0 11-2 0V3a1 1 0 011-1zm-1 5l5 5m0-5l-5 5"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex lg:space-x-4 lg:pl-0 space-y-4 lg:space-y-0 mr-4`}
      >
        <li>
          <a href="#" className="block text-gray-600 hover:text-gray-800">
            ホーム
          </a>
        </li>
        <li>
          <a href="#" className="block text-gray-600 hover:text-gray-800">
            会社概要
          </a>
        </li>
        <li>
          <a href="#" className="block text-gray-600 hover:text-gray-800">
            サービス
          </a>
        </li>
        <li>
          <a href="#" className="block text-gray-600 hover:text-gray-800">
            ポートフォリオ
          </a>
        </li>
        <li>
          <a href="#" className="block text-gray-600 hover:text-gray-800">
            お問い合わせ
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
