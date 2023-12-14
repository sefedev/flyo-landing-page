import TestimonyBlock from "../components/testimony-block";

const TESTIMONY = [
  { img: "profile-1", name: "Sathish Patel" },
  { img: "profile-2", name: "Bruce McKenzie" },
  { img: "profile-3", name: "Iva Boyd" },
];

const Testimony = () => {
  return (
    <section className="relative flex flex-col items-center gap-8 pt-12 pb-72 lg:flex-row">
      {TESTIMONY.map(({ img, name }, id) => (
        <TestimonyBlock key={id} img={img} name={name} />
      ))}
      <img
        src="./assets/bg-quotes.png"
        className="absolute w-8 -inset-x-2 inset-y-7"
      />
    </section>
  );
};

export default Testimony;
