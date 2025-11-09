import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const projects = [
  {
    image: portfolio1,
    title: "Modern Bedroom Retreat",
    category: "Residential",
  },
  {
    image: portfolio2,
    title: "Contemporary Kitchen",
    category: "Residential",
  },
  {
    image: portfolio3,
    title: "Minimalist Living Space",
    category: "Residential",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
          Portfolio
        </h2>
        <div className="h-1 w-24 bg-accent mx-auto mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="font-serif text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/90 text-sm">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
