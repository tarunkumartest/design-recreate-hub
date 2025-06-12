import React from 'react';
import { BulletPoint } from './DecorativeElements';

interface TimelineItemProps {
  period: string;
  description: string;
  className?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ period, description, className = "" }) => {
  return (
    <article className={`relative mb-44 ${className}`}>
      <BulletPoint className="left-[256px] top-[13px]" />
      <h3 className="text-[#03045E] text-2xl font-semibold leading-10 ml-[287px] mb-2.5 max-md:ml-5 max-sm:text-lg max-sm:leading-8">
        {period}
      </h3>
      <p className="text-[#03045E] text-2xl font-normal leading-[44px] w-[900px] ml-[287px] max-md:w-full max-md:ml-5 max-sm:text-lg max-sm:leading-8">
        {description}
      </p>
    </article>
  );
};

export const About: React.FC = () => {
  return (
    <section id="about" className="mt-[154px] px-[97px] py-0 max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0">
      <h2 className="text-[#F7F197] text-[100px] font-extrabold leading-[116px] mb-8 max-sm:text-6xl max-sm:leading-[70px]">
        about.
      </h2>
      
      <p className="text-[#03045E] text-2xl font-normal leading-[44px] w-[900px] mb-[57px] max-md:w-full max-sm:text-lg max-sm:leading-8">
        A Full Stack Engineer specializing in AI-powered, scalable web solutions. I build fast, functional, and future-ready applications with a strong focus on performance, analytics, and user experience. With hands-on expertise in deploying and optimizing cloud-native solutions, I also help startups and founders launch lean, high-impact MVPs — from idea to execution.
      </p>
      
      <div className="space-y-0">
        <TimelineItem
          period="2019-2022"
          description="Previously worked as a DevOps Engineer at IntellaSphere Inc., a digital marketing platform tailored for SMEs and MMEs. I specialized in managing and automating cloud infrastructure across AWS, GCP, and Azure — ensuring seamless deployment, scalability, and performance. My role involved end-to-end CI/CD, infrastructure as code, and cloud-native automation to support high-availability marketing solutions."
        />
        
        <TimelineItem
          period="2022 - Present"
          description="Senior DevOps Engineer at Blackboard — one of the world's leading EdTech platforms. I architect and manage scalable, enterprise-grade AWS cloud infrastructure, driving efficiency through automation, Infrastructure as Code, and modern CI/CD pipelines. I've integrated cutting-edge Large Language Models (LLMs) into cloud-native workflows, building intelligent internal tools for infrastructure insights, automated documentation, and operational decision support. Leveraged Model Context Protocols (MCPs) to streamline AI model deployment, tracking, and lifecycle management — ensuring reproducibility, version control, and contextual awareness across environments."
        />
      </div>
    </section>
  );
};
