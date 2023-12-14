const FeatureBlock = ({ title, img, description }) => {
  return (
    <div className="lg:max-w-[40%]">
      <div className="mb-4 grid place-items-center">
        <img src={`./assets/${img}`} alt="Feature Images" />
      </div>
      <h3 className="text-2xl text-center font-semibold py-2">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default FeatureBlock;
