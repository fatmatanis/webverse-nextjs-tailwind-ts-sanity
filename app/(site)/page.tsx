import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";

export default async function Home() {
  const projects: Project[] = await getProjects();

  return (
    <div>
      <h1 className="text-5xl sm:text-7xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r  from-pink-500 via-red-700 to-purple-600 bg-clip-text text-transparent">
          Fatma
        </span>
        !
      </h1>
      <p className="mt-3 text-md sm:text-xl text-gray-600">
        Aloha everyone! Check out my projects!
      </p>
      <h2 className="sm:mt-24 mt-12 font-bold text-gray-700 text-xl sm:text-3xl">
        My Projects
      </h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            key={project._id}
            className="border border-gray-500 rounded-lg p-1 pb-10 hover:scale-105 hover:border-blue-500 transition"
            href={`/projects/${project.slug}`}
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg w-full h-full"
              />
            )}
            <div className="mt-2 font-extrabold text-center bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
