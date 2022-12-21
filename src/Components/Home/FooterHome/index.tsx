import Router from "next/router";

export const FooterHome = () => {
  const redirectToGithubProfile = (user: string) => () => {
    Router.push(`https://github.com/${user}`);
  };
  return (
    <footer className="text-sm h-[5%] w-[100%] flex justify-center font-semibold gap-1">
      <span className="text-gray-400">Created by </span>
      <span
        className="hover:text-gray-400 cursor-pointer	"
        onClick={redirectToGithubProfile("Du2Du")}
      >
        Du2Du
      </span>
      <span className="text-gray-400">and </span>
      <span
        className="hover:text-gray-400 cursor-pointer	"
        onClick={redirectToGithubProfile("andr30z")}
      >
        andr30z
      </span>
    </footer>
  );
};
