const NavBar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ">
        <div className="md:flex items-center w-1/4 gap-4 lg:gap-8 border-solid border-white justify-center  ">
          <h3 className="font-light lg:text-2xl">Omar Rico</h3>
        </div>
        {/* Menu links  */}
        <div className=" sm:flex md:flex items-center gap-4 lg:gap-8 w-2/4 justify-between px-10 mx-10  box rounded-full overflow-hidden">
          <a href="Banner" className=" group flex flex-col gap-2">
            Home
          </a>
          <a href="services" className="group flex flex-col  gap-2">
            Services
          </a>
          <a href="about" className=" group flex flex-col gap-2">
            About
          </a>

          <a href="projects" className="group flex flex-col gap-2 ">
            Projects
          </a>
        </div>
        <div className="md:flex items-center justify-center w-1/4 gap-4 lg:gap-8 ">
          <button className="hireMe-btn px-4 py-1 text-sm rounded-lg">
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
