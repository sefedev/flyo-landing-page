import React from "react";
import FeatureBlock from "../components/feature-block";

const FEATURES = [
  {
    title: "Access your files, anywhere",
    description:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    img: "icon-access-anywhere.svg",
  },
  {
    title: "Security you can trust",
    description:
      "2-factor and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    img: "icon-security.svg",
  },
  {
    title: "Real-time collaboration",
    description:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    img: "icon-collaboration.svg",
  },
  {
    title: "Access your files, anywhere",
    description:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    img: "icon-any-file.svg",
  },
];

const Features = () => {
  return (
    <section className="flex flex-wrap gap-16 my-8 justify-center">
      {FEATURES.map(({ title, img, description }, id) => (
        <FeatureBlock
          key={id}
          title={title}
          img={img}
          description={description}
        />
      ))}
    </section>
  );
};

export default Features;
