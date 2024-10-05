// import React from 'react'
import { RiMoneyRupeeCircleLine, RiArrowRightSLine } from "react-icons/ri";
import { MatchesData } from "../Api/MatchesData";
import { useEffect, useState } from "react";
import propType from "prop-types";

const MatchList = ({ selectedDate, filterOptions }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newMatches, setNewMatches] = useState(false);

  const handleClick = () => {
    setNewMatches(true);
    setLoading(true);
  };

  useEffect(() => {
    setLoading(true);
    const filterdData = MatchesData.filter(
      (item) =>
        item.player1.includes(filterOptions.toUpperCase()) ||
        item.player2.includes(filterOptions.toUpperCase()) ||
        item.time.includes(filterOptions) ||
        item.date.includes(filterOptions.toUpperCase()) ||
        item.price.includes(filterOptions)
    );

    const timeout = setTimeout(() => {
      if (filterdData.length === 0) {
        setData("No matches found! 🙁");
      } else {
        setData(filterdData);
      }
      setLoading(false);
    }, 1000);

    const timeout2 = setTimeout(() => {
      setNewMatches(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
  }, [filterOptions, selectedDate, newMatches]);

  return (
    <>
      {loading ? (
        <p className="mx-4 mt-32 font-bold text-lg text-center">
          Loading matches...
        </p>
      ) : newMatches ? (
        <div className="mx-4 mt-32 font-bold text-lg text-center">
          Hang tight! You&apos;ve successfully joined the match.
        </div>
      ) : (
        (selectedDate === "Upcoming" && typeof data !== "string" && (
          <>
            <div className="mx-4 mt-16 font-bold grid gap-x-4 gap-y-6 grid-cols-2 sm:grid-cols-1 ">
              {data.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 flex justify-center items-center max-w-fit space-x-1 bg-white rounded-full text-black">
                    <div>
                      {" "}
                      <RiMoneyRupeeCircleLine className="w-6 h-6" />
                    </div>
                    <div className="font-normal">{item.price}</div>
                    <div>
                      <RiArrowRightSLine />
                    </div>
                  </div>
                  <div className="bg-gray-800 border-t-4 border-white rounded-t-md border-b px-2 py-5 ">
                    <div className="flex justify-between items-center">
                      <div>{item.player1}</div>
                      <div className="flex flex-col justify-center items-center">
                        <div className="opacity-70 font-light">{item.date}</div>{" "}
                        <div>{item.time}</div>
                      </div>
                      <div>{item.player2}</div>
                    </div>
                  </div>
                  <div className="bg-gray-800 flex justify-center items-center rounded-b-md  px-2 py-2 ">
                    <button
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 w-full rounded-full"
                      onClick={() => handleClick()}
                    >
                      JOIN GAME
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative font-bold text-lg text-center  ">
              <h1 className="absolute top-16 left-0 right-0 bg-black">
                Developed with <span className="text-rose-500">love</span> and
                care by{" "}
                <span className="text-orange-500">Ranjeet Vishwakarma</span>
              </h1>
            </div>
          </>
        )) ||
        (selectedDate === "🟢 Live" && (
          <div className="mx-4 mt-32 font-bold text-lg text-center">
            Unfortunately! There are no live matches happening at the moment.
          </div>
        )) ||
        (selectedDate === "Completed" && (
          <div className="mx-4 mt-32 font-bold text-lg text-center">
            Oops! You haven&apos;t completed any matches yet.
          </div>
        ))
      )}

      {!loading && typeof data === "string" && (
        <div className="mx-4 mt-32 font-bold  ">
          <h3 className="text-xl mb-6">{data}</h3>
          <div className="p-6 rounded-lg shadow-md  bg-gray-700">
            <h4 className="text-lg font-semibold mb-4 ">
              Hints for match search -
            </h4>
            <ul className="list-disc  space-y-2 list-outside">
              <li>
                <strong>For Players</strong> - IND, AUS, BRA, ARG, GER, FRA,
                ESP, CZE, RSA, NGA, IRL, SCO, ICE.
              </li>

              <li>
                <strong>For Dates</strong> - OCT 15, OCT 16, OCT 17, OCT 18, OCT
                19, OCT 20.
              </li>
              <li>
                <strong>For Price</strong> - 3000, 3500, 4000, 4500.
              </li>

              <li>
                <strong>For Time</strong> - 14:30, 16:45, 18:20, 13:00, 17:10,
                20:30.
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

MatchList.propTypes = {
  selectedDate: propType.string,
  filterOptions: propType.string,
};

export default MatchList;
