"use client";

import {
  BanknotesIcon,
  CircleStackIcon,
  MagnifyingGlassCircleIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Procurement",
    description:
      "We identify reliable suppliers who can provide grains that meet our quality standards. Once reliable suppliers are identified, we negotiate prices and terms that are favorable to our customers.",
    icon: MagnifyingGlassCircleIcon,
  },
  {
    name: "Testing & Inspection",
    description:
      "We conduct rigorous quality tests and inspections to ensure that grains meet the required standards. This service encompasses conducting physical and chemical tests to determine the grain.",
    icon: RectangleStackIcon,
  },
  {
    name: "Storage & Handling",
    description:
      "We provide a comprehensive solution for the safekeeping and management of grains. Our secure and climate-controlled storage facilities, including silos, warehouses, and containers.",
    icon: CircleStackIcon,
  },
  {
    name: "Financing",
    description:
      "We provide customers with flexible financing options and solutions tailored to their specific needs, enabling them to manage their cash flow and make informed purchasing decisions. ",
    icon: BanknotesIcon,
  },
];

export default function Services() {
  return (
    <section className="bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base  font-semibold text-green-700">
            Services
          </h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Tailored Services to Meet Your Needs
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-lg font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-700">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
