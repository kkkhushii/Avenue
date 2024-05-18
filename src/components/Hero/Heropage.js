'use client'
import React, { useState } from "react";
import Image from "next/image";

function Heropage() {


  const [formData, setFormData] = useState({
    destination: "",
    vacationMood: "",
    date: "",
    passengers: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { destination, vacationMood, date, passengers } = formData;

    if (!destination && !vacationMood && !date) {
      alert("Please select all options.");
    } else if (!destination) {
      alert("Please select a destination.");
    } else if (!vacationMood) {
      alert("Please select a vacation mood.");
    } else if (!date) {
      alert("Please select a Date.");
    } else {
      alert(
        `Destination: ${destination}\nVacation Mood: ${vacationMood}\nDate: ${date}\nPassengers: ${passengers}`
      );
    }
  };

  return (
    <div className="max-w-[1370px] w-full mx-auto  ">
      <div className="bg-custom-image mt-[20px] rounded-[24px] overflow-hidden">
        <div className="bgcoloropacity">
          <div className="grid  grid-cols-12 justify-between gap-[4px]  ">
            <div className="flex flex-col col-span-8 justify-end flex-1">
              <>
                <h1 className="text-white font-bold text-[100px] text-shadowss w-fit ">
                  CANADA
                  <span className="text-customblue">.</span>
                </h1>
              </>
              <div className="flex items-center gap-4">
                <div>
                  <Image src="Icons\Group 380.svg" width={133} height={59} />
                </div>
                <span className=" text-[3.125rem] font-bold text-shadowss w-fit text-white">
                  $350
                </span>
              </div>
            </div>

            <div className=" rounded-[24px] col-span-4 shadow-customboxshadow  bg-white">
              <div className="p-[30px]">
                <div className="flex items-center pb-4">
                  <h4 className="font-customFont font-bold text-[26px] text-customcol">
                    Plan your Vacation
                  </h4>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="border-b-2 py-4 flex flex-col">
                    <label
                      htmlFor="destination"
                      className="text-lablecolor font-normal text-base font-customFont"
                    >

                      Destination*
                    </label>
                    <select
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="font-mediumtext-[20px] text-customcol focus:outline-none focus:border-none"
                    >
                      <option value="">Select Destination</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="Canada">Canada</option>
                      <option value="United States">United States</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>
                  <div className="border-b-2 py-4 flex flex-col">
                    <label
                      htmlFor="vacationMood"
                      className="text-lablecolor font-normal text-base font-customFont"
                    >

                      Vacation Mood*
                    </label>
                    <select
                      id="vacationMood"
                      name="vacationMood"
                      value={formData.vacationMood}
                      onChange={handleChange}
                      className="font-mediumtext-[20px] text-customcol focus:outline-none focus:border-none"
                    >
                      <option value="">Select Vacation Mood</option>
                      <option value="Hiking Adventure">Hiking Adventure</option>
                      <option value="Mountain Climbing">
                        Mountain Climbing
                      </option>
                      <option value="Safari">Safari</option>
                      <option value="Rock Climbing">Rock Climbing</option>
                    </select>
                  </div>

                  <div className="py-4">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex flex-col">
                        <label
                          htmlFor="date"
                          className="text-lablecolor font-normal text-base font-customFont"
                        >
                          Date*
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          placeholder="mm/dd/yyyy"
                          className="font-mediumtext-[20px] text-customcol focus:outline-[#93c5fd]"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="passengers"
                          className="text-lablecolor font-normal text-base font-customFont"
                        >
                          Passengers*
                        </label>
                        <input
                          type="number"
                          id="passengers"
                          name="passengers"
                          value={formData.passengers}
                          onChange={handleChange}
                          className="font-mediumtext-[20px] text-customcol focus:outline-[#93c5fd]"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-customblue rounded-[8px] py-[15px] px-[100px] text-white font-mediumtext-base cursor-pointer
                      hover:text-customblue hover:border-customblue hover:bg-white border border-transparent transition-colors duration-300"

                    >
                      Search Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heropage;
