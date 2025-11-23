import Me from "@/assets/Me.jpg";

const About = () => {
  return (
    <>
      {/* Subtle white space before the colored section */}
      <div className="h-16 md:h-10 lg:h-10" style={{ backgroundColor: "#ffffff" }} />

      {/* Main About Section */}
      <section
        id="about"
        className="py-16 md:py-20 lg:py-24 px-4"
        style={{ backgroundColor: "#a7b2a4" }}
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-3 text-white">
            About Me
          </h2>
          <div className="h-px w-20 bg-white/60 mx-auto mb-10" />

          <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Photo – Left */}
            <div className="flex justify-center md:justify-end">
              <div className="w-72 md:w-80 lg:w-96 aspect-[3/4] rounded-xl overflow-hidden shadow-xl ring-8 ring-white/20">
                <img
                  src={Me}
                  alt="Wafa Ammous – Interior Designer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Text – Right */}
            <div className="text-white space-y-5 text-lg leading-relaxed">
              <p>
                With over a decade of experience, I craft timeless spaces that blend minimalist elegance with everyday comfort. My approach is simple: listen deeply to each client’s vision, then transform it into warm, functional interiors using natural materials and thoughtful details.
              </p>
              <p>
                Every project—whether a serene home or a refined commercial space—is designed to inspire, tell a story, and feel effortlessly beautiful for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;