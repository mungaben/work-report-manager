"use client";
import { useCallback, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

import { useReportStore } from "@/app/utils/Stores/Report";


import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";

import { ReportTypes } from "@/app/utils/Types/Mytypes";
import axios from "axios";
import { toast } from "react-hot-toast";

export const applications = [
  "Basis 2",
  "INTERFACE",
  "CMS",
  "SPMS",
  "NEW PERPAY",
  "OLD PERPAY",
  "UTILITY MASTER",
  "INTERNET",
  "Exchange BrowserMail ",
];

// useEffect(() => {
//     console.log(applications)
// }, [])

ChartJS.register(ArcElement, Tooltip, Legend);
const AnalyticCards = async () => {
  const url = "/api/Reports";
  const { report, setReport } = useReportStore();
  console.log("reportStore", report);

  const [dataondate, setdataondate] = useState<ReportTypes[] | string>([]);
  // console.log("dataondate", dataondate);

  const dtaprev = useCallback(() => {
    const getdata = async () => {
      const dataavail = await axios.get(url);
      if (dataavail.status === 200) {
        dataavail.data && setdataondate(dataavail.data);
        setReport(dataavail.data);
        toast.success("Data available set");
      }
    };
  }, []);
  const LabelsDta = [
    "cms",
    "spms",
    "oldperpay",
    "newperpay",
    "internet",
    "utilitymaster",
    "exchangemail",
    "Basis2",
    "Interface",
  ];
  // const datamapped = report.map((data: ReportTypes) => {
  //     const mappedData: { label: string, data: any, Daughnut: any }[] = [];
  //     LabelsDta.forEach((label) => {
  //         const existingData = mappedData.find((item) => item.label === label);
  //         if (existingData) {
  //             existingData.data.push(data[label]);
  //         } else {

  //             mappedData.push({
  //                 label,
  //                 data: [data[label]], // Access the property dynamically using the label
  //                 //   for each label attach data Daughnut details for it
  //                 Daughnut: {
  //                     labelsdata: ['Red', 'Blue'],

  //                     datasets: [
  //                         {

  //                             data: [9, 3],
  //                             backgroundColor: [
  //                                 'rgba(255, 99, 132, 0.2)',
  //                                 'rgba(54, 162, 235, 0.2)',

  //                             ],
  //                             borderColor: [
  //                                 'rgba(255, 99, 132, 1)',
  //                                 'rgba(54, 162, 235, 1)',

  //                             ],
  //                             borderWidth: 2,
  //                         },
  //                     ],
  //                 }
  //             });
  //         };
  //     })

  //     //   console.log("mappedData", mappedData);

  //     return mappedData
  // })

  // console.log("datamapped", datamapped);

  const fetchData = useCallback(() => {
    const dataObj: {
      [key: string]: { data: any[]; datalabel: string; daughnut: any };
    } = {};

    LabelsDta?.forEach((label) => {
      dataObj[label] = {
        data: [],
        datalabel: label,
        daughnut: {
          labelsdata: ["Red", "Blue"],
          datasets: [
            {
              data: [], // Initialize an empty data array
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
              borderWidth: 2,
            },
          ],
        },
      };
    });

    report &&
      report?.forEach((data: ReportTypes) => {
        LabelsDta?.forEach((label) => {
          dataObj[label].data.push(data[label]);
        });
      });

    Object.values(dataObj).forEach((item) => {
      const total = item.data.reduce((acc, value) => acc + value, 0);
      item.daughnut.datasets[0].data = [total, report.length * 5];
    });

    return Object.values(dataObj);
  }, [report]);

  const datamapped = fetchData();

  // daunaught data **************************
  const Dougnaut = {
    labelsdata: ["Red", "Blue"],

    datasets: [
      {
        data: [9, 3],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 2,
      },
    ],
  };

  // daunaught data **************************

  // console.log("data vailprev",dtaprev());

  // console.log("data vailprev",dtaprev);
  useEffect(() => {
    dtaprev();
    // console.log("data posted", datamapped);
  }, []);

  return (
    <div className="flex flex-row items-center justify-between w-full overflow-x-auto ">
      {/* <ActivityData/> */}

      {datamapped?.map((data, index) => (
        <div
          key={index}
          className=" flex flex-row items-center justify-start bg-[#fafafafa] shadow-md p-2 m-2 rounded-md"
        >
          <div>
            <div className="block ">
              <h3 className=" font-[14px] text-[#333333]/90  text-sm ">
                {data.datalabel}
              </h3>
            </div>
            <div>
              <h1 className="mx-3 text-xs ">{data.data.length}</h1>
            </div>
            <div className="flex flex-row ">
              <div className="p-1 ">
                <svg
                  width="8"
                  height="6"
                  viewBox="0 0 8 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.94269 0.855372C7.88539 0.714876 7.77078 0.599174 7.63162 0.541322C7.56613 0.516529 7.49245 0.5 7.41878 0.5H5.89614C5.57687 0.5 5.3231 0.756199 5.3231 1.07851C5.3231 1.40083 5.57687 1.65703 5.89614 1.65703H6.04349L4.31619 3.40083L3.4812 2.14463C3.38296 2.00413 3.23561 1.90496 3.0637 1.88843C2.8836 1.8719 2.72806 1.92975 2.60527 2.05372L0.165771 4.51653C-0.0552571 4.73967 -0.0552571 5.10331 0.165771 5.33471C0.280379 5.45041 0.419545 5.5 0.566897 5.5C0.714249 5.5 0.861602 5.44215 0.968023 5.33471L2.91635 3.36777L3.75134 4.62397C3.84958 4.76446 3.99693 4.86364 4.16884 4.88017C4.34894 4.89669 4.50448 4.83884 4.62727 4.71488L6.85392 2.46694V2.6157C6.85392 2.93802 7.1077 3.19421 7.42696 3.19421C7.74622 3.19421 8 2.93802 8 2.6157V1.07025C7.98362 0.995868 7.97544 0.921488 7.94269 0.855372Z"
                    fill="#377DFF"
                  />
                </svg>
              </div>

              <h4 className="flex text-xs ">
                {100 -
                  Math.round(
                    (data.daughnut.datasets[0].data[0] /
                      data.daughnut.datasets[0].data[1]) *
                      100
                  )}
              </h4>
            </div>
          </div>
          <div className="relative flex justify-end w-full ">
            <div className=" w-13 h-13">
              <div className=" absolute left-[35px] top-9 ">
                <p className=" text-[#333333]  text-xs flex justify-center items-center pt-2 mx-auto">
                  {Math.round(
                    (data.daughnut.datasets[0].data[0] /
                      data.daughnut.datasets[0].data[1]) *
                      100
                  )}
                  %
                </p>
              </div>
              <Doughnut data={data.daughnut} height={90} width={90} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnalyticCards;
