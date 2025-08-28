import ProfileImg from "../assets/profile.jpg";
import LoadingBar from "../assets/loading-bar.jpg";

const Wrapper = () => {
  return (
    <div className="mt-15 mb-10 lg:w-4/6 md:w-5/6  flex flex-col justify-center mx-auto">
      <Banner />
      <Projects/>
      <div className=""></div>
      <div className="">Container 2</div>
      <div className="">Container 3</div>
      <div className="">Container 4</div>
    </div>
  );
};
export default Wrapper;

const Banner = () => {
  return (
    <div
      id="banner"
      className="box flex gap-3 px-7 py-11 m-4 rounded-2xl"
    >
      <div className=" w-1/3 pr-5">
        <div className=" h-auto">
          <p className="font-light  text-left text-3xl text-stone-400">
            Omar Rico
          </p>
          <span className="w-full font-black text-4xl my-3.5 text-stone-300 uppercase">
            {" "}
            junior software developer
          
          </span>
        </div>

      </div>

      <div className="w-4/6 items-center flex flex-col pl-5">
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

  return (
    <div id="projects" className=" flex flex-col gap-3 px-7 py-11 m-4 rounded-2xl">
      <div className=" w-full pr-5">
        <div className=" h-auto">
          <p className="font-light  text-left text-3xl text-stone-400">
            Projects
          </p>
          <span className="w-full font-black text-4xl my-3.5 text-stone-300 uppercase">
            {" "}
            Some of my recent works
          
          </span>
          <div className="mt-10 flex gap-3 w-[700px]">
            <div className="w-5/8"><h3>Title</h3>
            <p>Description</p>
            <div className="flex  my-3 h-auto flex-wrap">

            <span className="text-center overflow-hidden w-[75px] m-1 text-[20px] border-2 rounded-md  h-9">Linux</span>
            <span className="text-center overflow-hidden w-[75px] m-1 text-[20px] border-2 rounded-md p-1 ">React</span>
            <span className="text-center overflow-hidden w-[75px] m-1 text-[20px] border-2 rounded-md p-1 >">Php</span>
        
              <span className="text-center overflow-hidden w-[75px] m-1 text-[20px] border-2 rounded-md p-1 ">Linux</span>
            <span className="text-center overflow-hidden w-[70px] m-1 text-[20px] border-2 rounded-md p-1 ">React</span>
            <span className="text-center overflow-hidden w-[70px] m-1 text-[20px] border-2 rounded-md p-1 >">Php</span>
        <span className="text-center overflow-hidden w-[70px] m-1 text-[20px] border-2 rounded-md p-1 ">Linux</span>
            <span className="text-center overflow-hidden w-[70px] m-1 text-[20px] border-2 rounded-md p-1 ">React</span>
            <span className="text-center overflow-hidden w-[70px] m-1 text-[20px] border-2 rounded-md p-1 >">Php</span>
        
              <span className="overflow-hidden w-[70px] mx-3 text-[20px] border-2 rounded-md p-1 ">Linux</span>
            <span className="overflow-hidden w-[70px] mx-3 text-[20px] border-2 rounded-md p-1 ">React</span>
            <span className="overflow-hidden w-[70px] mx-3 text-[20px] border-2 rounded-md p-1 >">Php</span>
        
            </div>
            <a href="#">Link</a>
            </div>
            <img src={LoadingBar} alt="profile" className="w-3/8 rounded-lg size-50" /> 
          </div>
        </div>

      </div>

      <div className="w-full items-center flex flex-col pl-5">
        <h2 className="text-justify my-3 text-xl  text-stone-400">
          Here are a few projects I've worked on recently. Want to see more? Email me.
        </h2>
      </div>
      </div>
  )
}