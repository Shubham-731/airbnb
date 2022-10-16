import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        className=""
        priority="lazy"
        alt="banner"
      />

      <div className="absolute top-1/2 text-center left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold space-y-1">
        <p>Not sure where to go? Perfect.</p>
        <button className="bg-white rounded-full px-5 py-3 shadow-md hover:shadow-lg active:scale-110 transition duration-150 text-red-400">
          I&quot;m flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
