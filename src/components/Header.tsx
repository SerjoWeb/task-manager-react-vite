import type { FC, ReactNode } from "react";

interface HeaderProps {
  body: ReactNode;
}

const Header: FC<HeaderProps> = ({ body }) => {
  return (
    <header className="bg-blue p-5 shadow-md h-full max-h-[123px]">
      {body}
    </header>
  );
};

export default Header;
