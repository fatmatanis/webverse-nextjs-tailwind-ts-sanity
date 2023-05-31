import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getProject } from "@/sanity/sanity-utils";

type Props = {
  params: {
    project: string;
  };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header className="flex items-center justify-between gap-4">
        <h1
          className="bg-gradient-to-r from-pink-500 via-red-700 to-purple-600 bg-clip-text
         text-transparent text-3xl sm:text-4xl leading-normal drop-shadow font-extrabold"
        >
          {project.name}
        </h1>
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold sm:text-lg text-sm py-3 px-4 whitespace-nowrap
           hover:bg-pink-500 hover:text-pink-100 transition"
        >
          View Project
        </a>
      </header>
      <div className="sm:text-lg text-md text-gray-700 mt-5">
        <PortableText value={project.content} />
      </div>
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      />
    </div>
  );
};

export default Project;
