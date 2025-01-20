

import React from 'react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    date: 'October 1987',
    title: 'Brundtland Report and Sustainable Development',
    description: 'The report’s emphasis on sustainable development paved the way for renewable energy solutions like solar power, highlighting the need for balancing environmental and economic priorities.',
  },
  {
    date: 'September 2000',
    title: 'Adoption of the United Nations Millennium Development Goals (MDGs)',
    description: 'By acknowledging energy as a critical enabler of development, the MDGs underscored the need for accessible, reliable electricity in underserved regions.',
  },
  {
    date: 'December 2015',
    title: 'Paris Agreement and Global Push for Renewable Energy',
    description: 'The global push for renewable energy in the Paris Agreement catalyzed efforts to reduce carbon emissions and expand clean energy access.',
  },
  {
    date: 'July 2022',
    title: 'SolarVista Launch',
    description: 'SolarVista was officially launched, focusing on helping underserved communities gain access to sustainable and affordable solar energy solutions.',
  },
];

const Timeline = () => {
  return (
    <div className="w-full py-12 px-6">
      {/* Horizontal Flexbox Layout for the Timeline */}
      <ul className="flex justify-center items-center space-x-8">
        {events.map((event, index) => (
          <li key={index} className="w-80 h-60 flex-shrink-0">
            {/* Timeline Box with fixed height and width */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md border border-[#2d2d2d] w-full h-full flex flex-col justify-between">
              <h3 className="font-bold text-xl text-[#f1b128]">{event.title}</h3> {/* Removed truncate */}
              <p className="text-sm text-gray-300">Date: {event.date}</p>
              <p className="text-sm text-gray-400">{event.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;

