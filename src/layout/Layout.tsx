import { ReactNode } from "react";

import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "800", "900"],
});

export interface ChildrenI {
  children: ReactNode;
}

const Layout: React.FC<ChildrenI> = ({ children }) => {
  return <main className={` ${poppins.className}`}>{children}</main>;
};

export default Layout;
