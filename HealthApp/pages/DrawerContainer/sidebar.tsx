import React from "react";
import { FC } from "react";
import { slide as Menu } from "react-burger-menu";
import styles from "./styles";

 const Sidebar: FC = props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/about">
        About
      </a>

      <a className="menu-item" href="/services">
        Services
      </a>

      <a className="menu-item" href="/contact">
        Contact us
      </a>
    </Menu>
  );
};

export default Sidebar;