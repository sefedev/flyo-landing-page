import React from "react";

const About = () => {
  return (
    <section className="flex flex-col items-center my-16 lg:flex-row lg:justify-between">
      <div className="lg:max-w-[47%]">
        <img
          src="./assets/illustration-stay-productive.png"
          alt="Stay Productive"
          className="w-full"
        />
      </div>
      <div className="lg:max-w-[47%]">
        <h3 className="my-4 text-xl font-bold lg:text-3xl">
          Stay productive,
          <br /> wherever you are
        </h3>
        <p className="mb-4">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a
          href="#"
          className="flex items-center gap-2 py-2 mt-2 border-b-2 text-cyan border-cyan w-fit hover:border-white hover:text-white"
        >
          See how Flyo works
          <span>
            <img src="./assets/icon-arrow.svg" alt="see how" />
          </span>
        </a>
      </div>
    </section>
  );
};

export default About;
