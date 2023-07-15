import pic1 from "../assets/Grad_pic.jpg";
import { BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";

function Hero() {
  return (
    <>
      <section className="bg-slate-800">
        <div className="container mx-auto p-4">
          <div className="row flex flex-wrap items-center sm:flex-nowrap sm:flex-row gap-1 ">
            {/* Social Media */}
            <div className="col flex-1">
              <div className="row flex justify-center sm:flex-wrap gap-6 me-3 ">
                <BsGithub className="text-5xl text-sky-200" />
                <BsFacebook className="text-5xl text-sky-200" />
                <BsInstagram className="text-5xl text-sky-200" />
              </div>
            </div>
            {/* Name and Info */}
            <div className="col flex-1 basis-full">
              <div className="row">
                <h1 className="text-6xl text-blue-200">
                  Hi! I am
                  <br />
                  <span className="font-[poppins] text-blue-400 text-8xl">
                    Rain Christian Seguban
                  </span>
                  <br />a Full Stack Web Developer
                </h1>
                <p className="text-2xl text-blue-200 mt-9">
                  I'm a Junior Full Stack Web Developer with a passion for
                  creating dynamic and user-friendly web applications.
                  Proficient in <span className="text-blue-500">HTML</span>,{" "}
                  <span className="text-blue-500">CSS</span>,{" "}
                  <span className="text-blue-500">JavaScript</span>,
                  <span className="text-blue-500">ReactJS</span>,{" "}
                  <span className="text-blue-500">BootstrapCSS</span>,{" "}
                  <span className="text-blue-500">TailwindCSS</span>,{" "}
                  <span className="text-blue-500">Laravel</span>,{" "}
                  <span className="text-blue-500">NodeJS</span>, and{" "}
                  <span className="text-blue-500">Git</span>, I deliver
                  high-quality code and intuitive user experiences. Let's bring
                  your digital vision to life!
                </p>
                <br />
                <div className="flex justify-center">
                  <a className="btn my-3 py-2 px-4 rounded text-2xl text-blue-100 bg-cyan-700 shadow-lg shadow-cyan-500/25 hover:text-white hover:shadow-cyan-500/100 hover:scale-125 transition duration-200">
                    See my projects here!
                  </a>
                </div>
              </div>
            </div>
            {/* IMAGE */}
            <div className="col flex-1 basis-full">
              <div className="row">
                <div className="col">
                  <img src={pic1} alt="picture of me" className="rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
