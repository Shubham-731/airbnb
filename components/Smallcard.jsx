import Image from "next/image";

const Smallcard = ({ distance, location, img }) => {
  return (
    <div className="space-x-4 flex items-center cursor-pointer rounded-xl hover:bg-gray-100 hover:scale-105 transition-transform ease-out">
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" alt={location} />
      </div>

      <div>
        <h3 className="">{location}</h3>
        <h4 className="text-gray-500">{distance}</h4>
      </div>
    </div>
  );
};

export default Smallcard;
