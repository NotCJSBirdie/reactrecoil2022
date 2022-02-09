import React from "react";
import { useState } from "react";

const House = () => {
  const [house, setHouse] = useState(false);

  const changeHouse = () => {
    setHouse(!house);
  };

  return (
    <div>
      <div className="flex flex-col items-center border-4 border-orange-400 w-full bg-orange-100">
        <div className="flex flex-row w-full items-center text-center bg-orange-700">
          <div className="flex flex-col items-center w-full">
            {house ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-home text-center"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#6f32be"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="5 12 3 12 12 3 21 12 19 12" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-home"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#00b341"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="5 12 3 12 12 3 21 12 19 12" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
              </svg>
            )}
          </div>
        </div>

        <button
          onClick={changeHouse}
          className="bg-red-400 text-white p-8 text-center my-8 font-bold rounded-3xl shadow-2xl hover:scale-110 transition-all ease-in-out"
        >
          Click these button to change the HOUSE!!
        </button>

        <div>I am HOUSE JEST UNIT TESTING</div>
      </div>
    </div>
  );
};

export default House;
