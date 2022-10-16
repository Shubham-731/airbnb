import Header from "../components/Header";
import Banner from "../components/Banner";
import Smallcard from "../components/Smallcard";
import Card from "../components/Card";
import Largecard from "../components/Largecard";
import Footer from "../components/Footer";

export default function Home({ exploreData, cardsData }) {
  console.log(cardsData);

  return (
    <>
      <title>Home | Airbnb</title>
      <Header />

      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16 ">
        <section className="pt-8">
          <h2 className="font-semibold text-3xl pb-4">Explore nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {exploreData?.map((item, index) => (
              <Smallcard
                key={index}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <section className="pt-8">
          <h2 className="text-3xl font-semibold pb-4">Live Anywhere</h2>

          <div className="flex items-center overflow-scroll space-x-4 scrollbar-hide p-4 -ml-4">
            {cardsData?.map((item, index) => {
              return <Card title={item.title} img={item.img} key={index} />;
            })}
          </div>
        </section>

        <Largecard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          desc="Wishlist created by Airbnb"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch(
    "https://api.npoint.io/81d0d72997c399a05b97"
  ).then((res) => res.json());

  const cardsData = await fetch(
    "https://api.npoint.io/619e5a7256386fc5d3aa"
  ).then((res) => res.json());

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
