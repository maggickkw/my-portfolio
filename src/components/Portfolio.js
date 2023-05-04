import { Section } from "./common/Section";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa"
import p1 from "../assets/codebook.png";
import p2 from "../assets/blockbuster.png";
import p3 from "../assets/mythoughts.png";
import p4 from "../assets/reduxshop.png";
import p5 from "../assets/todo.png";


export const Portfolio = () => {
    const projects = [
      {
        id: 1,
            title: "CodeBook",
        image: p1,
        github: "https://github.com/maggickkw/CodeBook",
        demo: "https://codebook-project.netlify.app/",
      },
      {
          id: 2,
          image: p2,
        title: "BlockBuster",
        github: "https://github.com/maggickkw/BlockBuster",
        demo: "https://blockbusterapp.netlify.app/",
      },
      {
          id: 3,
          image: p3,
        title: "MyThoughts",
        github: "https://github.com/maggickkw/MyThoughts",
        demo: "https://mythoughts-ul.netlify.app/",
      },
      {
          id: 4,
          image: p4,
        title: "ReduxShop",
        github: "https://github.com/maggickkw/REDUX-SHOP",
        demo: "https://reduxshop.netlify.app/",
      },
      {
          id: 5,
          image: p5,
        title: "todo app",
        github: "https://github.com/maggickkw/todo",
        demo: "https://todo-ul.netlify.app/",
      },
    ];

  return (
    <Section
      title="Portfolio 🗒️"
      subtitle="These are some of the projects I worked on before gaining any experience"
    >
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
        {projects.map(({ id, image, title, github, demo }) => (
          <div
            key={id}
            className="max-w-lg flex shadow-lg shadow-gray-200 rounded-2xl overflow-hidden"
          >
            <img src={image} alt={title} className="w-2/3" />
            <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
              <h2 className="text-lg md:text-xl lg:text-2xl  text-teal-500">
                {title}
              </h2>
              <a
                className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                href={github}
              >
                <FaGithub />
              </a>
              <a
                className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                href={demo}
              >
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
