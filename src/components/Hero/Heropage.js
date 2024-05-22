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
    <div className="max-w-[1370px] relative  w-full mx-auto">
      <div className="bg-custom-image  mt-[20px] rounded-[24px] overflow-hidden bg-no-repeat bg-cover">
        <img src="Icons\Group 79.11.svg" alt="img" className="absolute top-[167px] left-[-10px] " />
        <div className="bgcoloropacity">
          <div className="grid  grid-cols-12 justify-between gap-[4px] ">
            <div className="flex flex-col col-span-8 justify-end flex-1 ">
              <>
                <h1 className="text-white font-bold text-[100px]  w-fit text-custom-shadow">
                  CANADA
                  <span className="rounded-full inline-block w-4 h-4 bg-customblue ml-1"></span>
                </h1>
              </>
              <div className="flex items-center gap-3.5">
                <div className="flex flex-col gap-2">
                  <Image src="Icons\Frame 377.svg" width={76} height={29} />
                  <p className="font-medium text-lg text-white">Flight + 4 Nights</p>
                </div>
                <span className="text-[51px] font-bold text-custom-shadow w-fit text-white">
                  $350
                </span>
              </div>
            </div>

            <div className=" rounded-[24px] col-span-4 shadow-customboxshadow  bg-white">
              <div className="p-[30px]">
                <div className="flex items-center pb-[30px]">
                  <h4 className="font-customFont font-bold text-[26px] text-customcol">
                    Plan your Vacation
                  </h4>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="border-b-2 pb-[26px] flex flex-col">
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
                      className="font-medium text-[20px] text-customcol focus:outline-none focus:border-none"
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
                  <div className="border-b-2  pt-[15px] pb-[26px] flex flex-col">
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
                      className="font-medium text-[20px] text-customcol focus:outline-none focus:border-none"
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

                  <div className="pt-[15px]">
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
                          className="font-medium text-[20px] text-customcol focus:outline-[#93c5fd]"
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
                          className="font-medium text-[20px] text-customcol focus:outline-[#93c5fd]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[40px]">
                    <button className='text-customblue bg-white border font-medium text-lg  rounded-[8px] py-[15px] px-[102px] border-customblue fill' > Search Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Heropage;
