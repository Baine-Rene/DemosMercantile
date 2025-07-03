import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  description: string;
  linkedin?: string;
}

interface TeamProps {
  heading?: string;
  subheading?: string;
  description?: string;
  members?: TeamMember[];
}

const Team = ({
  heading = "Meet Our Team",
  subheading = "Team up!",
  description = "A dedicated team passionate about shaping the future of productivity.",
  members = [
    {
      id: "person-1",
      name: "Christian BAINE",
      role: "Director and CEO",
      avatar: "/Team/chris-baine.jpg",
      description: "Christian is a warehouse receipt and commodity trading expert with 25+ years’ experience. He has held senior roles at Stanbic Bank, AFGRI Group, ACE Global, and advised the Ugandan government on warehouse systems.",
      linkedin: "#"
    },
    {
      id: "person-2",
      name: "Stephen KAYE",
      role: "Operations Manager",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
      description: "Stephen, Operations Manager at Demos Mercantile, has 20+ years’ experience in collateral and risk management, with prior roles at ACE Global and ACE-Audit Control & Expertise.",
      linkedin: "#"
    },
    {
      id: "person-3",
      name: "Micheal ASSIMWE",
      role: "Credit Support Manager",
      avatar: "/Team/micheal-asiimwe.jpg",
      description: "Michael, Credit Support Manager at Demos Mercantile, brings 17+ years of banking and credit experience. He previously held key roles at KCB Bank and Blue Crane Communication Ltd.",
      linkedin: "#"
    },
  ],
}: TeamProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border mb-6">
            <span className="text-sm font-medium">👥 {subheading}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 max-w-4xl">
            {heading}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            {description}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {members.map((person) => (
            <div key={person.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              {/* Avatar */}
              <div className="mb-6">
                <Avatar className="size-24 mb-4">
                  <AvatarImage src={person.avatar} alt={person.name} />
                  <AvatarFallback className="bg-gray-100 text-gray-600 font-semibold">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                {/* Name and Role */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {person.name}
                </h3>
                <p className="text-sm font-medium text-gray-600 mb-4">
                  {person.role}
                </p>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {person.description}
                </p>
                
                {/* Social Icons */}
                <div className="flex gap-3">
                  {person.linkedin && (
                    <a 
                      href={person.linkedin}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                      aria-label={`${person.name} LinkedIn`}
                    >
                      <Linkedin className="size-4 text-gray-600" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Team };