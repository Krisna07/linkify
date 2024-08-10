import React, { useRef, MouseEvent } from "react";

interface menuProps {
  menu: {
    name: string;
    link: string;
  };
  handleHover: any;
  thisNav: string;
}

const NavMenu = ({ menu, handleHover, thisNav }: menuProps) => {
  const menuRef = useRef(null);
  const getDimension = (e: MouseEvent<HTMLDivElement>) => {
    const rect: any = e && e.currentTarget.getBoundingClientRect();
    const position = rect.x;
    const width = rect.width;
    handleHover({ width, position });
  };

  //   console.log(menuRef.current.innerText);

  return (
    <div
      ref={menuRef}
      onMouseOver={getDimension}
      className="w-fit whitespace-nowrap px-4 py-1 bg-primary rounded-md"
    >
      {menu.name}
    </div>
  );
};

export default NavMenu;
