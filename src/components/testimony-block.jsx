const TestimonyBlock = ({ img, name }) => {
  return (
    <div className="bg-bgTestimonial lg:w-[30%] px-4 pt-8 pb-4 shadow-md z-30">
      <p>
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </p>
      <div className="flex gap-2 items-center mt-4">
        <img
          src={`./assets/${img}.jpg`}
          alt="profile"
          className="w-12 rounded-full"
        />
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-xs">Founder & CEO, Huddle</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonyBlock;
