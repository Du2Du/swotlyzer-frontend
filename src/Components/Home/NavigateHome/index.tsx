import Link from "next/link";
import { RoutesName } from "../../../RoutesName";

export const NavigateHome = () => {
  return (
    <header className="flex opacity-100 header h-[15%] w-[100%] flex-row px-2 md:px-5 items-center justify-between pt-3">
      <div className="flex items-center">
        <ul className="flex text-gray-300 font-semibold text-lg md:text-xl flex-row items-center justify-end md:mr-5">
          <li className="px-2 hover:text-stone-400 md:px-6">Swotlyzer</li>
        </ul>
      </div>
      <div className="flex items-center">
        <ul className="flex text-gray-300 font-semibold text-lg md:text-xl flex-row items-center justify-end md:mr-5">
          <li className="px-2 hover:text-stone-400 md:px-6">
            <Link href={RoutesName.DASHBOARD}>Dashboard</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
