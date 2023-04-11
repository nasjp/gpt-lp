import React from "react";

interface MenuItemProps {
  url: string;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ url, label }) => {
  return (
    <li>
      <a href={url} className="text-white hover:text-gray-200">
        {label}
      </a>
    </li>
  );
};

export default MenuItem;
