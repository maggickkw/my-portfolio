export const Section = ({ title, subtitle, children }) => {
  return (
    <section className="min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center">
      <h3 className="py-3 text-3xl lg:text-5xl">{title}</h3>
      <p className="ma-w-xl font-light text-gray-500 mb-10 md:text-base">
        {subtitle}
      </p>
      {children}
    </section>
  );
};