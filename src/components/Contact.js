import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { Section } from "./common/Section";
import contact from "../assets/mobile.png";

export const Contact = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "https://twitter.com/king_maggick",
      icon: <FaTwitter />,
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/wilberforce-sedem-haibor-59210120b/",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <Section
      title="Contact 📞"
      subtitle="These are the ways to get in touch with me. I hope to hear from you soon 😎"
    >
      <div className="flex flex-col items-center justify-center  text-center pt-4">
        <div>
          <img src={contact} alt="contact information" className="w-32 h-32" />
        </div>
        <div>
          <p className="min-w-xs text-center justify-center md:max-w-lg font-extralight pt-6">
            I am open to freelance, contract or full-time opportunities. Kindly,
            reach out to me using your preferred medium.
          </p>
        </div>
        <div className="flex w-full items-center justify-evenly text-3xl pt-6">
          {SOCIAL.map(({ id, link, icon }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="duration-200 ease-in-out hover:text-rose-600"
            >
              {icon}
            </a>
          ))}
        </div>
        <div className="p-8 text-left w-full flex items-center justify-center">
          <form
            action="https://getform.io/f/17244c64-b183-494c-a576-2473ae7e9617"
            method="POST"
          >
            <div className=" w-full">
              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight">
                  name
                </label>
                <input
                  type="text"
                  name="name"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">
                  phone
                </label>
                <input
                  type="text"
                  name="phone"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">
                  email
                </label>
                <input
                  type="text"
                  name="email"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight">
                  message
                </label>
                <textarea
                  name="message"
                  rows="10"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none"
                ></textarea>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button className="my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};
