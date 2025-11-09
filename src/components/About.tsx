const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-4xl animate-slide-up">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
          About Me
        </h2>
        <div className="h-1 w-24 bg-accent mx-auto mb-12" />
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            With over a decade of experience in interior design, I specialize in creating spaces that
            seamlessly blend aesthetics with functionality. My approach is rooted in understanding
            each client's unique vision and lifestyle, translating their dreams into tangible,
            beautiful realities.
          </p>
          <p>
            I believe that great design is timeless—it should evoke emotion, tell a story, and stand
            the test of time. Whether it's a cozy residential sanctuary or a sophisticated commercial
            space, my goal is to craft environments that inspire and delight.
          </p>
          <p>
            My design philosophy embraces minimalism, natural materials, and thoughtful details.
            Every project is an opportunity to create something truly special, balancing form and
            function with elegance and warmth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
