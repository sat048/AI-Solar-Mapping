

import Timeline from './Timeline';

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center px-4 py-10 max-w-7xl mx-auto">
      {/* Vision Description */}
      <section className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#00aced] mb-4">Our Vision</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          At SolarVista, our vision is to make clean, affordable solar energy accessible to underserved communities worldwide. 
          By leveraging global milestones in sustainable development, such as the Paris Agreement and Millennium Development Goals, 
          we recognize the urgent need to address energy inequity. Our project uses data-driven solutions to identify optimal 
          locations for solar installations, empowering remote regions with reliable, renewable energy to foster growth and sustainability.
        </p>
      </section>

      {/* Timeline Component */}
      <Timeline />
    </div>
  );
}




  