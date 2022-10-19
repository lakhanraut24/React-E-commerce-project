import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-wrap place-items-center ">
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-white-900 text-black w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a className="text-3xl font-bold font-heading" href="#">
                <div className="group flex items-center">
                  <img
                    className="h-14 "
                    src="assets/Images/LRlogo.png"
                    alt="logo"
                  />
                  <div className="ltr:ml-3 rtl:mr-3 ">
                    <p className="text-lg font-bold text-slate-700 group-hover:text-slate-900">
                      
                      We <span className="text-[#ff424d]">Bring </span>
                    </p>
                    <p className="text-sm font-medium text-slate-500 group-hover:text-slate-700">
                      
                      🛒
                    </p>
                  </div>
                </div>
                The Good <span className="text-[#ff424d]">Cart </span> To Life
              </a>

              <ul className="hidden md:flex px-1 mx-auto  pl-4  font-heading text-lg font-bold space-x-12">
                <li>
                  <a className="text-blue-500 hover:bg-sky-700 " href="#">
                    HOME
                  </a>
                </li>
                <li>
                  <a className="hover:text-white-200 " href="#">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200" href="#">
                    PRODUCTS
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-200" href="#">
                    CONTACT 
                  </a>
                </li>
              </ul>

              <div className="hidden xl:flex items-center space-x-5 items-center mr-4">
                
                <a className="flex items-center hover:text-gray-200" href="#">
                <span className="font-bold text-xl">cart (0)</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                 
                </a>

                <a className="flex items-center hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            
          </nav>
        </section>
      </div>

      
    </>
  );
};

export default Navbar;
