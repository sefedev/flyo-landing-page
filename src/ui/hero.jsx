// import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="flex flex-col items-center py-8">
      <img src="./assets/illustration-intro.png" className="lg:w-[30%] mb-4" />
      <h2 className="py-4 text-3xl font-bold text-center">
        All your files in one secure location, <br />
        accessible anywhere.
      </h2>
      <p className="text-center">
        Flyo stores all your important file in one secure location
        <br />
        Access them wherever you need, share and collaborate with friends,
        family and co-workers.
      </p>
      {/* <Button title="Get Started" className="my-10" /> */}
    </section>
  );
};

export default Hero;
