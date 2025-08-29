import ProfileImg from "../assets/profile.jpg";
import LoadingBar from "../assets/loading-bar.jpg";

const Wrapper = () => {
  return (
    <div className="mt-15 mb-10 lg:w-4/6 md:w-5/6  flex flex-col justify-center mx-auto">
      <Banner />
      <Projects />
    </div>
  );
};
export default Wrapper;

const Banner = () => {
  const techStack = [
    "Python",
    "Java",
    "Typescript",
    "Javascript",
    "SQL",
    "Chakra",
    "Linux",
    "MySQL",
    "PHP",
    "Tableau",
    "React",
    "github",
    "Excel",
    "CSS",
    "Tailwind",
  ];
  return (
    <div id="banner" className="box flex gap-3 px-7 py-11 m-4 rounded-2xl">
      <div className=" w-[470px]">
        <div className=" h-auto">
          <p className="font-light  text-left text-3xl text-stone-400">
            Omar Rico
          </p>
          <span className="w-full font-black text-4xl my-3.5 text-stone-300 uppercase">
            {" "}
            junior software developer
          </span>
          <div className="h-20"></div>
          <div className="flex my-3 h-auto flex-wrap">
            {techStack.map((tech) => (
              <span
                className="text-center overflow-hidden w-[90px] text-[1em] m-1 px-2 border-b  h-7"
                key={tech}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-4/6 items-center flex flex-col">
        <img src={ProfileImg} alt="profile" className="rounded-full size-50" />
        <h2 className="text-justify my-3 text-xl  text-stone-400">
          Welcome to my portfolio!I am a junior developer with 2 years of
          experience building and designing web applications. I have a constant
          desire to learn and create solutions. Living in Ireland for the last 7
          years helped me to immerse myself in the tech community and contribute
          to diverse projects with a passion for programming and a desire to
          contribute to meaningful projects.
        </h2>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Game Hub",
      description:
        "A dinamic web application which displays some of the most popular video games, with the option to sort the games based on rating , gere, platform and relevance",
      imgUrl: LoadingBar,
      Url: "https://game-platform-project.vercel.app",
      techStack: ["react", "typescript", "javascript", "chakra", "api", "CSS"],
    },
    {
      title: "Jack Sony Pictures",
      description:
        "A portfolio gallery for a small business to show their work and contact details, te user has full access to the layout of the gallery, and can personalize at any minute",
      imgUrl: LoadingBar,
      Url: "http://tazasrotas.000webhostapp.com/jack-sony-pictures/gallery.html",
      techStack: ["javascript", "css", "html"],
    },
    {
      title: "Game Hub",
      description:
        "A dinamic web application which displays some of the most popular video games, with the option to sort the games based on rating , gere, platform and relevance",
      imgUrl: LoadingBar,
      Url: "https://game-platform-project.vercel.app",
      techStack: ["react", "typescript", "javascript", "chakra"],
    },
  ];

  return (
    <div
      id="projects"
      className=" flex flex-col gap-3 px-7 py-11 m-4 rounded-2xl"
    >
      <div className=" w-full pr-5">
        <div className=" h-auto">
          <p className=" font-black   text-center text-3xl text-stone-300 uppercase">
            Projects
          </p>
          <div className="h-5"></div>
          <span className="  w-full  text-2xl my-3.5 text-stone-400 ">
            Here are a few projects I've worked on recently.
          </span>
          <div className="mt-10 flex gap-3 w-[1050px]">
            {projects.map((project) => (
              <div key={project.title} className="w-full mx-2">
                <img
                  src={project.imgUrl}
                  alt="profile"
                  className="w-full rounded-lg size-50"
                />
                <h3 className="mt-5 font-bold">{project.title}</h3>

                <p className="mt-5">{project.description}</p>
                <div className=" h-20">
                  <div className="h-auto flex my-3 flex-wrap">
                    {project.techStack.map((tech) => (
                      <span className="text-center overflow-hidden w-60px] text-[.8em] m-1 px-2 border-2 rounded-md h-6">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full items-center justify-center flex">
                  <a
                    href={project.Url}
                    className=" text-center w-3/4 px-10 bg-[#8d7cff] rounded-lg hover:bg-[#6F5CFF]  text-white"
                  >
                    Visit here
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
