import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import React from "react";
import { CustomButton } from "../..";
import { RoutesName } from "../../../RoutesName";

export const NavigateHome: React.FC = () => {
  const genericLogo =
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg";

  const clickSignUp = () => {
    Router.push(RoutesName.LOGIN);
  };
  return (
    <header className="flex w-100 flex-row px-2 md:px-5 items-center py-5">
      <Image
        width="100px"
        height="100px"
        loader={() => genericLogo}
        src={genericLogo}
        alt="GenericLogo"
      />
      <nav className="w-[85%]">
        <ul className="flex flex-row items-center justify-end	md:mr-5">
          <li className="px-2 md:px-6">
            <Link href={RoutesName.DASHBOARD}>Dashboard</Link>
          </li>
          <li className="px-2 md:px-6">
            <Link href={RoutesName.ABOUT}>About</Link>
          </li>
          <li className="px-2 pr-4 md:px-6">
            <Link href={RoutesName.CONTACT}>Contact</Link>
          </li>
        </ul>
      </nav>
      <CustomButton label="Sign-up" onClick={clickSignUp} />
    </header>
  );
};
