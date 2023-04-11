import React from "react";
import MenuItem from "./MenuItem";

const Menu: React.FC = () => {
  return (
    <ul className="flex space-x-4">
      <MenuItem url="/" label="Menu Item 1" />
      <MenuItem url="/" label="Menu Item 2" />
      <MenuItem url="/" label="Menu Item 3" />
    </ul>
  );
};

export default Menu;
