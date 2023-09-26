import { AiOutlineHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoBootstrap,
} from "react-icons/bi";
import { FaNodeJs, FaPhp } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";

function Skills() {
  return (
    <section
      id="skills-section"
      className="bg-slate-800 p-14"
    //   className="py-10 bg-cover bg-center bg-no-repeat"
    //   style={{
    //     backgroundImage: `url("https://cdn.pixabay.com/photo/2013/07/12/15/03/clouds-149344_1280.png")`,
    //   }}
    >
      <div className="container mx-auto py-4">
        <div className="row flex justify-center items-center">
          <div className="col flex flex-col gap-5">
            <h1 className="text-7xl sm:text-8xl text-blue-300 text-center">
              Skills
            </h1>
            <h3 className="text-5xl sm:text-6xl text-blue-200 text-center">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              What I'm capable of?
            </h3>
          </div>
        </div>
        <div className="laptop__container flex flex-col items-center">
          <div className="laptop__case w-[80%] border-8 rounded-t-2xl h-[30rem] border-gray-50 dark:bg-slate-600">
            {/* <div className="laptop__screen"> */}
            <h3 className="text-center text-blue-200 text-4xl m-5">
              This are my tech stacks!
            </h3>
            <div className="p-8 row flex flex-col gap-10 flex-wrap sm:items-start sm:justify-around sm:flex-row sm:flex-nowrap">
              <div className="col flex flex-col items-center">
                <h2 className="text-blue-200 text-5xl underline">Front-End</h2>
                <div className="row flex flex-col items-center space-x-4">
                  <div className="row flex space-x-4 ">
                    <div className="col p-1 mt-3 bg-sky-200 rounded-lg">
                      <AiOutlineHtml5 className="text-5xl text-red-500" />
                    </div>
                    <div className="col p-1 mt-3 bg-sky-200 rounded-lg">
                      <BiLogoCss3 className="text-5xl text-blue-500" />
                    </div>
                    <div className="col p-1 mt-3 bg-sky-200 rounded-lg">
                      <BiLogoJavascript className="text-5xl text-yellow-500" />
                    </div>
                  </div>
                  <div className="row flex space-x-4 ">
                    <div className="col p-1 mt-3 bg-sky-200 rounded-lg">
                      <BiLogoReact className="text-5xl text-cyan-500" />
                    </div>
                    <div className="col p-1 mt-3 dark:bg-sky-200 rounded-lg">
                      <BiLogoBootstrap className="text-5xl text-violet-500" />
                    </div>
                  </div>
                  <div className="row flex">
                    <div className="col p-1 mt-3 bg-sky-200 rounded-lg">
                      <BiLogoTailwindCss className="text-5xl text-cyan-500" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col flex flex-col items-center">
                <h2 className="text-blue-200 text-5xl underline">Back End</h2>
                <div className="row flex flex-col items-center space-x-4">
                  <div className="row flex space-x-4">
                    <div className="col p-1 mt-3 bg-sky-200 rounded-lg">
                      <FaPhp className="text-5xl text-violet-500" />
                    </div>
                    <div className="col p-1 mt-3 bg-sky-200 rounded-lg">
                      <SiMysql className="text-5xl text-blue-500" />
                    </div>
                    <div className="col p-1 mt-3 bg-sky-200 rounded-lg">
                      <SiMongodb className="text-5xl text-green-500" />
                    </div>
                  </div>
                  <div className="row flex space-x-4">
                    <div className="col p-1 mt-3 bg-sky-200 rounded-lg">
                      <FaLaravel className="text-5xl text-red-500" />
                    </div>
                    <div className="col p-1 mt-3 bg-sky-200 rounded-lg">
                      <FaNodeJs className="text-5xl text-green-700" />
                    </div>
                  </div>
                  <div className="row flex">
                    <div className="col p-1 mt-3 bg-sky-200 rounded-lg">
                      <SiExpress className="text-5xl text-black" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
          <div className="laptop__keyboard w-[100%] h-[16px] rounded-b-2xl bg-gray-500 flex justify-center">
            <div className="laptop__latch h-[8px] w-12 bg-gray-700 rounded-b-lg"></div>
          </div>
        </div>
      </div>
      <hr className="mx-6" />
    </section>
  );
}

export default Skills;
