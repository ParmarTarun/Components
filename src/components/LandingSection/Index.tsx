import { FC } from "react";
import { FaGithub } from "react-icons/fa";

const Landing = () => {
  return (
    <>
      <h1 className="text-primary">COMPONENTS</h1>
      <hr className="border border-primary w-2/5" />
      <p className="mt-8 text-dark">
        Reuseable React components styled with{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noreferrer"
          className="text-primary italic"
        >
          TailwindCSS
        </a>
      </p>
      <div className="flex justify-center ">
        <button className="bg-highlight text-light font-semibold border border-hightlight hover:bg-primary shadow-lg">
          <FaGithub className="inline mr-2" />
          Git Repo
        </button>
      </div>
    </>
  );
};

export default Landing;
