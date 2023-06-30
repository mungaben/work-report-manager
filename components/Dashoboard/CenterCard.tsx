"use client";

import React, { useState } from "react";
import { Line } from "react-chartjs-2";

import { LineData, options } from "./LineChart";
import DataTime from "./GetDataTime/DataTime";

const CenterCard = () => {
  return (
    <div className="  m-4 flex items-center justify-center shadow-md bg-[#fafafa]">
      <div className=" w-full">
        <div className="w-full min-h-full ">
          <div className="">
            <div></div>
          </div>
          <DataTime time={"day"} />
        </div>
      </div>
    </div>
  );
};

export default CenterCard;
