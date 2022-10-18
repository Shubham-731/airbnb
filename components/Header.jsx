import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function Header({ placeholder }) {
  const [searchValue, setSearchValue] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetSearch = () => {
    setSearchValue("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchValue,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  return (
    <header className="py-3 px-5 md:px-10 bg-white grid grid-cols-3 shadow-md sticky top-0 z-50">
      {/* Left */}
      <div className="h-8 flex items-center relative my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          className="cursor-pointer"
          alt="logo"
          onClick={() => router.push("/")}
        />
      </div>

      {/* Middle */}
      <div className="relative flex items-center rounded-full border md:shadow-sm px-2">
        <input
          type="text"
          placeholder={placeholder || "Start your search..."}
          className="bg-transparent outline-none py-2 flex-grow pl-2 text-gray-500 placeholder:text-sm"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={search}
          className="w-8 h-8 hidden md:inline-flex bg-red-400 rounded-full p-2 text-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>

      {/* Right */}
      <div className="flex items-center justify-end space-x-3">
        <p className="text-gray-500 hidden md:inline cursor-pointer hover:text-red-400 transition">
          Become a seller
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>

        <div className="flex items-center p-2 border rounded-full space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {searchValue && (
        <div className="col-span-3 mx-auto flex flex-col">
          <DateRangePicker
            minDate={new Date()}
            ranges={[selectionRange]}
            rangeColors={["#FD5B91"]}
            onChange={handleSelect}
          />

          <div className="flex items-center border-b pb-2">
            <h2 className="text-2xl font-semibold flex-grow">
              Number of Guests
            </h2>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
            </svg>
            <input
              type="number"
              className="w-12 pl-2 text-red-400 text-lg outline-none"
              min={1}
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
            />
          </div>

          <div className="flex items-center pt-2">
            <button
              className="py-2 flex-grow hover:bg-gray-100 transition rounded-lg"
              onClick={resetSearch}
            >
              Cancel
            </button>
            <button
              onClick={search}
              className="py-2 flex-grow hover:bg-red-400 rounded-lg text-red-400 hover:text-white transition"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
