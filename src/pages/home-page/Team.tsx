import MaxWidth from '@/components/max-width/MaxWidth';
import Image from 'next/image';
import React from 'react';

const Team = () => {
  const members = [
    { image: "/images/team/team-1.svg", name: "Alice", role: "CTO & Co-Founder" },
    { image: "/images/team/team-2.svg", name: "Bob", role: "CEO & Co-Founder" },
    { image: "/images/team/team-3.svg", name: "Charlie", role: "Lead Developer" },
    { image: "/images/team/team-4.svg", name: "Diana", role: "UI/UX Designer" },
    { image: "/images/team/team-5.svg", name: "Eve", role: "Marketing Head" },
  ];

  return (
    <div className="bg-[#0A2540] py-10 md:py-24">
      <MaxWidth>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="md:w-[60%]">
            <h1 className="btnText lg:text-6xl text-3xl font-bold text-white">
              Meet our team
            </h1>
          </div>
          <div className="md:w-[35%] mt-4 md:mt-0">
            <p className="text-white">
              Our robust analytics offer rich insights into the information buyers want, informing where teams focus.
            </p>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {members.map((member, idx) => (
            <div key={idx} className="relative group cursor-pointer">
              <Image
                src={member.image}
                alt={member.name}
                width={282}
                height={305}
                className="w-full h-full object-contain rounded-lg"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center text-white rounded-lg">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidth>
    </div>
  );
};

export default Team;
