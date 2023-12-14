import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Button from "../components/Button";

const Footer = () => {
  return (
    <footer className="relative px-4 py-16 text-sm text-white bg-bgFooter lg:px-24">
      <div className="absolute grid -inset-y-40 h-fit place-items-center">
        <div className="h-fit  w-[90%] bg-bgTestimonial rounded-md shadow-md p-12 flex flex-col items-center lg:w-[60%]">
          <h3 className="mb-4 text-2xl font-semibold text-center">
            Get early access today
          </h3>
          <p className="my-4 text-center">
            It only takes about a minute to sign up and our free starter tier is
            extremely generous. If you have any question, Our support team would
            be happy to help you.
          </p>

          <div className="flex flex-col w-full gap-4 lg:flex-row">
            <input
              type="email"
              placeholder="email@example.com"
              className="px-8 py-4 text-black rounded-full lg:flex-1"
            />
            <Button title="Get Started For Free" className="px-8" />
          </div>
        </div>
      </div>

      <img src="./assets/logo.svg" className="mt-72 lg:mt-24" />

      <div className="flex flex-col gap-8 mt-12 lg:flex-row">
        <div className="flex gap-8 items-start w-full lg:w-[30%]">
          <img src="./assets/icon-location.svg" className="w-auto h-auto" />
          <p className="leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum
            rerum consequatur fugiat quis voluptates mollitia fuga reprehenderit
            id voluptas.
          </p>
        </div>

        <div className="w-full lg:w-[30%]">
          <a className="flex gap-4 mb-4 item-center">
            <img
              src="./assets/icon-phone.svg"
              className="mr-2"
              width={20}
              height={10}
            />
            +1-343-343-6755
          </a>
          <a className="flex gap-4 item-center">
            <img
              src="./assets/icon-email.svg"
              className="mr-2"
              width={20}
              height={10}
            />
            info@flyo.com
          </a>
        </div>

        <ul className="w-full lg:w-[15%]">
          <li className="mb-2 ">
            <a href="#" className="hover:border-b hover:text-white">
              About
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:border-b hover:text-white">
              Job
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:border-b hover:text-white">
              Press
            </a>
          </li>
          <li>
            <a href="#" className="hover:border-b hover:text-white">
              Blog
            </a>
          </li>
        </ul>

        <ul className="w-full lg:w-[15%]">
          <li className="mb-2">
            <a href="#" className="hover:border-b hover:text-white">
              Contact us
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:border-b hover:text-white">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="hover:border-b hover:text-white">
              Privacy
            </a>
          </li>
        </ul>

        <div className="w-full lg:w-[15%] justify-center items-start flex gap-4">
          <span
            className="p-1 border-2 rounded-full cursor-pointer group hover:border-cyan"
            role="link"
          >
            <FaFacebookF className="group-hover:fill-cyan" />
          </span>
          <span
            className="p-1 border-2 rounded-full cursor-pointer group hover:border-cyan"
            role="link"
          >
            <FaTwitter className="group-hover:fill-cyan" />
          </span>
          <span
            className="p-1 border-2 rounded-full cursor-pointer group hover:border-cyan"
            role="link"
          >
            <FaInstagram className="group-hover:fill-cyan" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
