import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { format } from "date-fns";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

const Search = ({ searchResults }) => {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");
  const dateRange = `${formattedStartDate} ~ ${formattedEndDate}`;
  const placeholder = `${location} | ${dateRange} | ${noOfGuests} Guests`;

  return (
    <>
      <Header placeholder={placeholder} />
      <NextSeo title={`Stays in ${location}`} description={placeholder} />
      <main>
        <div className="flex py-3 relative">
          <section className="flex-grow md:px-10 p-5">
            <p className="text-sm">
              300+ stays | {dateRange} | {noOfGuests} guests
            </p>
            <h1 className="text-3xl font-semibold my-1 lg:mb-3">
              Stays in {location}
            </h1>

            <div className="hidden lg:inline-flex whitespace-nowrap space-x-3">
              <button className="button">Cancellation Flexibility</button>
              <button className="button">Type of places</button>
              <button className="button">Price</button>
              <button className="button">Rooms and Beds</button>
              <button className="button">More filters</button>
            </div>

            <div className="flex flex-col py-5">
              {searchResults.map(
                (
                  {
                    description,
                    img,
                    lat,
                    location,
                    long,
                    price,
                    star,
                    title,
                    total,
                  },
                  index
                ) => (
                  <InfoCard
                    description={description}
                    img={img}
                    location={location}
                    lat={lat}
                    long={long}
                    price={price}
                    star={star}
                    title={title}
                    total={total}
                    key={index}
                  />
                )
              )}
            </div>
          </section>

          <section className="hidden xl:inline-flex xl:min-w-[600px] overflow-hidden h-screen sticky top-0">
            <Map searchResults={searchResults} />
          </section>
        </div>
      </main>
    </>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch(
    "https://api.npoint.io/56e7a1d1033fb7721683"
  ).then((res) => res.json());

  return {
    props: {
      searchResults,
    },
  };
}
