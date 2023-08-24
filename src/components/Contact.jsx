import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uc2uq2m",
        "template_s27zqro",
        form.current,
        "YVb4BPsCUfJvMvonk"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact-section" className="bg-slate-800 pt-32">
      <div className="container mx-auto ">
        <div className="row">
          <div className="col">
            <h1 className="text-5xl text-blue-200">Contact me:</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-blue-200 mt-5 text-2xl font-bold text-center md:text-left">
              <span className="text-teal-400 text-3xl">"</span> Get in Touch
              <span className="text-4xl text-teal-200">!</span> I'm always
              excited to connect with fellow creatives, collaborators, and
              potential clients. Whether you have a project in mind, want to
              discuss a creative idea, or simply want to say hello, don't
              hesitate to reach out. Feel free to use the contact form below or
              connect with me through the social media links provided. Let's
              bring ideas to life together!{" "}
              <span className="text-teal-400 text-3xl">"</span>
            </p>
          </div>
        </div>
        <div className="row flex flex-col md:flex-row justify-around pt-12 pb-48">
          <div className="col flex flex-col justify-center items-center pt-6">
            <ul className="flex flex-col space-y-12">
              <li>
                <a href="#">
                  <BsGithub className="text-5xl text-teal-300 font-bold hover:scale-125 transition-all duration-150" />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsFacebook className="text-5xl text-teal-300 font-bold hover:scale-125 transition-all duration-150" />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsInstagram className="text-5xl text-teal-300 font-bold hover:scale-125 transition-all duration-150" />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsLinkedin className="text-5xl text-teal-300 font-bold hover:scale-125 transition-all duration-150" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col mt-12 relative w-screen h-screen px-5 md:w-80 md:h-0">
            <form
              className="flex flex-col items-center text-blue-200 text-xl pb-5 "
              ref={form}
              onSubmit={sendEmail}
            >
              <label>Name</label>
              <input
                className="name__input rounded-xl h-10 text-center w-60 focus:w-full transition-all duration-500"
                type="text"
                name="user_name"
                placeholder="Write your name here:"
              />
              <label>Email</label>
              <input
                className="email-input rounded-xl h-10 text-center w-60 focus:w-full transition-all duration-500"
                type="email"
                name="user_email"
                placeholder="Write your email here:"
              />
              <label>Message</label>
              <textarea
                name="message"
                className="message__input text-teal-700 rounded-md text-center"
                placeholder="Write your message here:"
              />
              <input
                className="input__button cursor-pointer border-teal-400 hover:bg-teal-400 hover:text-slate-900 hover:scale-110 transition-all duration-250"
                type="submit"
                value="Send"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
