import Image from "next/image";

const Largecard = ({ img, title, desc, buttonText }) => {
  return (
    <section className="py-8 relative w-full">
      <div className="h-96 min-w-[300px] relative">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
          alt={title}
        />
      </div>

      <div className="absolute top-32 left-12 space-y-2">
        <h2 className="text-4xl font-semibold w-64">{title}</h2>
        <p>{desc}</p>
        <button className="py-2 px-4 rounded-md text-white bg-black">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default Largecard;
