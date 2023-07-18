import { FaTwitter, FaLinkedin, FaGithub, FaArrowDown } from "react-icons/fa";
import picture from "../assets/picture.jpg"

export const Hero = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "https://twitter.com/king_maggick",
      icon: <FaTwitter />,
    },

    {
      id: 2,
      link: "https://github.com/maggickkw",
      icon: <FaGithub />,
    },

    {
      id: 3,
      link: "https://www.linkedin.com/in/wilberforce-sedem-haibor-59210120b/",
      icon: <FaLinkedin />,
    },
    ];
    
    window.addEventListener("scroll", function () {
        const downArrow = document.querySelector(".down-arrow");

        if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
        else downArrow.classList.remove("hide-down-arrow");
    })

  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <h2 className="text-5xl text-rose-600 uppercase font-bold pt-5">
        Wilberforce Sedem Haibor
      </h2>
      <h3 className="py-3 text-2xl">SOFTWARE DEVELOPER</h3>
      <p className="max-w-xl font-light text-gray-500">
        Hello <span className="animate-pulse text-4xl">👋</span>, welcome to my
        site. I am a software developer based in Accra, Ghana. I love to work on
        web dev and Mobile dev projects.
      </p>

      <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
        {SOCIAL.map(({ id, link, icon }) => (
          <a
            className="cursor-pointer duration-300 hover:text-rose-600"
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            key={id}
          >
            {icon}
          </a>
        ))}
      </div>

      <div>
        <img
          src={picture}
          alt=""
          className="w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-rose-600 rounded-xl"
        />
        <a
          href="/coding-resume.pdf"
          download={true}
          className="flex items-center justify-center mt-10 bg-gradient-to-r from-rose-600 to-teal-500 text-white py-2 rounded-lg"
        >
          Resume
        </a>
          </div>
          
          <div className="mt-10 down-arrow">
              <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />
          </div>
    </section>
  );
};
