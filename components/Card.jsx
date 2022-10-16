import Image from "next/image";

const Card = ({ title, img }) => {
  return (
    <div className="hover:scale-105 transition-transform ease-out duration-300 cursor-pointer">
      <div className="relative w-80 h-80">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>

      <h3 className="mt-3 text-2xl">{title}</h3>
    </div>
  );
};

export default Card;
