import { useNavigate } from "react-router-dom";

import BedRoom1_1 from "@/assets/BedRoom1_1.jpg";

import BedRoom2_1 from "@/assets/BedRoom2_1.jpg";

import Kitchen1_1 from "@/assets/Kitchen1_1.jpg";

import LivingRoom1_1 from "@/assets/LivingRoom1_1.jpg";

import EntryWay1_1 from "@/assets/EntryWay1_1.jpg";

import BedRoom3_1 from "@/assets/BedRoom3_1.jpg";

import Bathroom1_1 from "@/assets/Bathroom1_1.jpg";

import Laundry from "@/assets/Laundry.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    id: "1",
    image: BedRoom1_1,
    title: "Harmony Haven Bedroom",
    category: "Residential",
  },
  {
    id: "2",
    image: BedRoom2_1,
    title: "Natural Calm Bedroom",
    category: "Residential",
  },
  {
    id: "3",
    image: Kitchen1_1,
    title: "Minimalist Living Space",
    category: "Residential",
  },
  {
    id: "4",
    image: LivingRoom1_1,
    title: "Luxury Living Room",
    category: "Residential",
  },
  {
    id: "5",
    image: EntryWay1_1,
    title: "Entryway Elegance",
    category: "Residential",
  },
  {
    id: "6",
    image: BedRoom3_1,
    title: "Modern Kitchen Design",
    category: "Residential",
  },
  {
    id: "7",
    image: Bathroom1_1,
    title: "Bathroom",
    category: "Residential",
  },
  {
    id: "8",
    image: Laundry,
    title: "Laundry",
    category: "Residential",
  },
];

const Portfolio = () => {
  const navigate = useNavigate();

  return (
<section id="portfolio" className="py-20 md:py-32 px-4">
  <div className="container mx-auto max-w-7xl">
    <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
      Portfolio
    </h2>
    <div className="h-1 w-24 bg-accent mx-auto mb-16" />

    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4 md:-ml-6">
        {projects.map((project, index) => (
          <CarouselItem
            key={index}
            className="pl-4 md:pl-6
                       basis-full          /* 1 per row – huge on mobile */
                       sm:basis-1/2        /* 2 per row on small tablets */
                       lg:basis-1/3"       /* 3 per row on desktop+ → BIG & spacious */
          >
            <div
              className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              {/* Taller, more dramatic aspect ratio */}
              <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Elegant hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 tracking-wide">
                  {project.title}
                </h3>
                <p className="text-white/90 text-sm md:text-base lg:text-lg">
                  {project.category}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Arrows – nicely spaced for 3 bigger cards */}
      <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16" />
      <CarouselNext className="hidden md:flex -right-12 lg:-right-16" />
    </Carousel>
  </div>
</section>
  );
};

export default Portfolio;
