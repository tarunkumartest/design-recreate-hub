import React from 'react';

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  altText: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageUrl, altText }) => {
  return (
    <article className="flex-1">
      <h3 className="text-[#03045E] text-2xl font-semibold leading-[44px] mb-[39px] max-sm:text-xl">
        {title}
      </h3>
      <img
        src={imageUrl}
        alt={altText}
        className="w-[560px] h-[400px] object-cover rounded-lg max-md:w-full max-md:max-w-[560px] hover:opacity-90 transition-opacity cursor-pointer"
      />
    </article>
  );
};

export const Work: React.FC = () => {
  return (
    <section id="work" className="mt-[113px] px-11 py-0 max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0">
      <h2 className="text-[#F7F197] text-[100px] font-extrabold leading-[116px] mb-8 max-sm:text-6xl max-sm:leading-[70px]">
        work.
      </h2>
      
      <p className="text-[#03045E] text-2xl font-normal leading-[44px] w-[900px] mb-[85px] max-md:w-full max-sm:text-lg max-sm:leading-8">
        Here's a showcase of select clients and projects I've had the privilege to collaborate with.
      </p>
      
      <div className="flex gap-[120px] mb-10 max-md:flex-col max-md:gap-10">
        <ProjectCard
          title="WorldMotorCyleDay.in"
          imageUrl="https://placehold.co/560x400/2c3e50/2c3e50"
          altText="WorldMotorCyleDay.in project showcase"
        />
        
        <ProjectCard
          title="Printstreet.in"
          imageUrl="https://placehold.co/560x400/e74c3c/e74c3c"
          altText="Printstreet.in project showcase"
        />
      </div>
    </section>
  );
};
