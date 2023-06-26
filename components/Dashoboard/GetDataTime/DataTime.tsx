


"use client"


import React, { useCallback, useEffect, useState } from 'react';


import { useForm } from 'react-hook-form';

import { Line } from 'react-chartjs-2';

import { ReportTypes } from '@/app/utils/Types/Mytypes';
import { options } from '../LineChart';

import { useDatetime } from '@/app/utils/Stores/Datetime';
import { useReportStore } from '@/app/utils/Stores/Report';
import dayjs from "dayjs";
import 'dayjs/locale/en'; // Import the desired locale file (e.g., English)
import weekday from 'dayjs/plugin/weekday';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
dayjs.extend(weekday); // Extend dayjs with the weekday plugin

type FormValues = {
    month: string;
    type: string;
};


type DataTimeProps = {
    time: string;

}
interface DaysOfWeek {
    [date: string]: string;
}

function DataTime(props: DataTimeProps) {
    const { date, setDate } = useDatetime();
    const { report } = useReportStore()
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
    ];
    type TimeSlot = 'from_0800AM' | 'from_0900AM' | 'from_1000AM' | 'from_1100AM' | 'from_1200PM' | 'from_1300PM' | 'from_1400PM' | 'from_1500PM' | 'from_1600PM' | 'from_1700PM';

    const timeSlots: TimeSlot[] = [
        'from_0800AM',
        'from_0900AM',
        'from_1000AM',
        'from_1100AM',
        'from_1200PM',
        'from_1300PM',
        'from_1400PM',
        'from_1500PM',
        'from_1600PM',
        'from_1700PM',
    ];
    const getWeekDays = () => {
        const today = dayjs(); // Get the current date
        const startOfWeek = today.startOf('week').subtract(1, 'week'); // Get the start of the week
        const days: DaysOfWeek = {}; // Initialize an empty object to store the days

        for (let i = 1; i <= 5; i++) {
            // Loop from Monday (1) to Friday (5)
            const day = startOfWeek.add(i, 'day'); // Add i days to the start of the week
            // console.log("day", day);

            const formattedDay = day.format('YYYY-MM-DD'); // Format the day as needed
            // console.log("formattedDay", formattedDay);

            const dayOfWeek = day.format('dddd'); // Get the day of the week
            // console.log("dayOfWeek", dayOfWeek);


            days[dayOfWeek] = formattedDay; // Assign the day of the week to the corresponding date
        }

        return days;
    }

    const dayofweek = getWeekDays();
    // console.log(dayofweek);

    const currentDay = dayjs().date();
    const daysOfMonth: { [key: string]: string } = {};

    for (let day = 1; day <= currentDay; day++) {
        const date = dayjs().date(day).format('YYYY-MM-DD');
        daysOfMonth[date] = `Date ${day}`;
    }
    // console.log("daysOfMonth", daysOfMonth);



    const [selectedDate, setSelectedDate] = useState(date);
    console.log("selectedDate", selectedDate.toLocaleString());
    const handleDateChange = (date: Date | Date[], event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (Array.isArray(date)) {
            // Handle multiple dates if needed
            return;
        }
        console.log("date", date);

        setDate(date);
        console.log("date", selectedDate);

        setSelectedDate(date);

        settoggle(!toggle);
    };
    const TodayDate = dayjs().endOf('day').toDate();


    const years = [
        '2019',
        '2020',
        '2021',
        '2022',
        '2023',
        '2024',
        '2025',
        '2026',

    ]
    const today = [
        'Today',
        'Yesterday'

    ]
    // const today={
    //     'Today':dayjs().format('YYYY-MM-DD'),
    //     'Yesterday':dayjs().subtract(1, 'day').format('YYYY-MM-DD'),

    // }



    const { register, handleSubmit, watch } = useForm<FormValues>();
    // const [day, setdays] = useState("Monday");
    // const [year, setyears] = useState("2019");
    // const [month, setmonth] = useState("January");
    // const [showWhat, setshowWhat] = useState<string>("day")
    // const [FilterData, setFilterData] = useState<string[]>(days);
    // const [time, settime] = useState(props.time);

    const [toggle, settoggle] = useState(false)
    // const [days1, setDay] = useState(new Date());
    // console.log("passed date set", days1);



    // set data avail to 
    // const [BASIS2, setBASIS2] = useState<number>()
    // const [INTERFACE, setInterface] = useState<number>()
    // const [CMS, setCMS] = useState<number>()
    // const [SPMS, setSPM] = useState<number>()
    // // console.log("passed data", CMS);

    // const [NewPREPAY, setNewPREPAY] = useState<number>()
    // const [OLDPERPAY, setOLDPERPAY] = useState<number>()
    // const [utilitymaster, setUtilitymaster] = useState<number>()
    // const [exchangemail, setExchangemail] = useState<number>()
    // const [INTERNET, setINTERNET] = useState<number>()
    // const [ExchangeBrowser, setExchangeBrowser] = useState<number>()
    // const [Comments, setComments] = useState()
    // data avail


    // const onSubmit = (data: FormValues) => {
    //     console.log(data); // Access the selected month value through data.month
    // };
    // const On1Submit = (data: FormValues) => {
    //     console.log(data);

    // };
    const handleButtonclick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        settoggle(!toggle);

    }

    // const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     setshowWhat(event.target.value);
    //     if (event.target.value === 'day') {
    //         setdays("day");
    //         setFilterData(days);
    //     } else if (event.target.value === 'year') {
    //         setdays("year");
    //         setFilterData(years)
    //     } else if (event.target.value === 'month') {
    //         setdays("month");
    //         setFilterData(months)
    //     } else if (event.target.value === 'Today') {
    //         setdays("today");
    //         setFilterData(today)
    //     }
    // };
    // const handleSearchChange = (event: React.ChangeEvent<HTMLSelectElement>) => {

    // }
    // get dayta by type of haeder by  from 7 to 5pm in each day by basis ,interface ,cms ,spms ,new prepay ,old prepay ,internet,exchge
    // get all data 
    // getdat that matches the date 
    // get adatfor @headers basis2,interface,cms,spms,new prepay,old prepay,internet,exchge
    // store the data
    // get the avarage data
    //  set it to state
    const dataLabels: ReportTypes[] = []
    const [DataAvail, setDataAvail] = useState<ReportTypes[]>([])
    const DataAnalysis = () => {
        // report?.map((data) => {
        //     const currentDate = dayjs(data.createdAt);
        //     const targetDate = dayjs(selectedDate);


        //     const isSameDate = currentDate.isSame(targetDate, 'day');
        //     isSameDate && console.log("same data", data);
        //     if (isSameDate) {
        //         console.log("target date", targetDate.toDate());

        //         dataLabels.push(data);
        //         setDataAvail(dataLabels);
        //     }else{
        //         // setDataAvail([]);

        //     }
        // });
        const filteredData = report?.filter((data) => {
            const currentDate = dayjs(data.createdAt);
            const targetDate = dayjs(selectedDate);

            const isSameDate = currentDate.isSame(targetDate, 'day');
            if (isSameDate) {
                return true;
            }
            return false;
        });

        setDataAvail(filteredData || []);


    };


    let LineDataAvail

    // console.log("data pushed report typestype", dataLabels[0]);
    // console.log("data available to the statrae", DataAvail);
    const GetAva = useCallback(() => {
        let cmstotal = 0;
        let spmstotal = 0;
        let oldperpaytotal = 0;
        let newperpaytotal = 0;
        let internettotal = 0;
        let utilitymastertotal = 0;
        let exchangemailtotal = 0;
        let Basis2total = 0;
        let Interfacetotal = 0;


        DataAvail.map((data) => {

            const { cms, spms, oldperpay, newperpay, internet, utilitymaster, exchangemail, Basis2, Interface } = data
            console.log("spms", spms);
            cmstotal += cms;
            spmstotal += spms;
            oldperpaytotal += oldperpay;
            newperpaytotal += newperpay;
            internettotal += internet;
            utilitymastertotal += utilitymaster;
            exchangemailtotal += exchangemail;
            Basis2total += Basis2;
            Interfacetotal += Interface;
        })
        // const cmstotalavg = cmstotal / DataAvail.length;
        // setCMS(cmstotalavg);
        // const spmstotalavg = spmstotal / DataAvail.length;
        // setSPM(spmstotalavg);
        // const oldperpaytotalavg = oldperpaytotal / DataAvail.length;
        // setOLDPERPAY(oldperpaytotalavg);
        // const newperpaytotalavg = newperpaytotal / DataAvail.length;
        // setNewPREPAY(newperpaytotalavg);
        // const internettotalavg = internettotal / DataAvail.length;
        // setINTERNET(internettotalavg);
        // const utilitymastertotalavg = utilitymastertotal / DataAvail.length;
        // setUtilitymaster(utilitymastertotalavg);
        // const exchangemailtotalavg = exchangemailtotal / DataAvail.length;
        // setExchangemail(exchangemailtotalavg);
        // const Basis2totalavg = Basis2total / DataAvail.length;
        // setBASIS2(Basis2totalavg);
        // const Interfacetotalavg = Interfacetotal / DataAvail.length;
        // setInterface(Interfacetotalavg);
        // console.log("camstotalavg", cmstotalavg);







    }, [])
    // GetAva();


    const labels = timeSlots.map((application) => application);
    LineDataAvail = {
        labels,
        datasets: [
            {
                label: 'BASIS2',
                data: DataAvail.map((data) => data.Basis2),
                borderColor: '#333333',
                backgroundColor: '#333333',
            },
            {
                label: "INTERFACE",
                data: DataAvail.map((data) => data.Interface),
                borderColor: 'green',
                backgroundColor: 'green',
            },
            {
                label: "CMS",
                data: DataAvail.map((data) => data.cms),
                borderColor: 'rose',
                backgroundColor: 'rose',
            },
            {
                label: "SPMS",
                data: DataAvail.map((data) => data.spms),
                borderColor: 'brown',
                backgroundColor: 'brown',
            },
            {
                label: "NEW PREPAY",
                data: DataAvail.map((data) => data.newperpay),
                borderColor: 'red',
                backgroundColor: 'red',
            },
            {
                label: "OLD PREPAY",
                data: DataAvail.map((data) => data.oldperpay),
                borderColor: 'purple',
                backgroundColor: 'purple',
            },
            {
                label: "INTERNET",
                data: DataAvail.map((data) => data.internet),
                borderColor: 'blue',
                backgroundColor: 'blue',
            },
        ],
    };


    useEffect(() => {
        DataAnalysis();
        GetAva();

    }, [selectedDate]);

    // const TodayDate = dayjs().endOf('day').toDate();
    return (
        <div>
            {/* <div className='flex flex-row items-center justify-between w-full '> */}
            {/* <div className='flex items-start '>
                    <form onSubmit={handleSubmit(On1Submit)} className='flex items-center justify-center ' >
                        <select {...register("type")} onChange={handleTypeChange}>
                            <option value="day">Days</option>
                            <option value="year">Year</option>
                            <option value="month">Month</option>
                            <option value="Today">Today</option>

                        </select>
                        {/* <input type="submit" value="Submit" /> */}


            {/* </form> */}
            {/* </div>  */}

            {/* <div className='flex items-end '>


                    <form onSubmit={handleSubmit(onSubmit)} className='flex items-center justify-center '>
                        <select {...register('month')} onChange={handleSearchChange} className=' flex justify-end  from-[#377DFF]/50 to-[#37CB87]/50'>
                            {
                                FilterData.map((data, index) => {
                                    return (
                                        <option key={index} value={data}>{data}</option>
                                    )
                                })
                            }
                        </select>
                        <input type="submit" value="Submit" />
                    </form>

                </div> */}



            {/* </div> */}
            {
                toggle ? <div className='flex items-center justify-center '>
                    <div className='flex bg-green-300 rounded-md '>
                        <div className=' transition  delay-[2000] hover:animate-none  hover:delay-500' >
                            <div className='flex flex-col '>
                                <h1 className=' flex justify-center items-center text-[#333333]/60 p-2' >Selected Date: {selectedDate.toLocaleDateString()}</h1>
                                <Calendar onChange={handleDateChange}
                                    value={selectedDate}
                                    maxDate={TodayDate}
                                />
                            </div>
                        </div>
                    </div>
                </div> :
                    <div className='flex items-center justify-center '>
                        <div className=' block bg-[#fafafa]/40  text-[#333333]/70 text-xl  font-thin hover:font-semi-bold'>
                            <button className=' bg-[#fafafa] rounded-lg p-2 mx-2 shadow-sm border-[1px] border-black' onClick={handleButtonclick}>{dayjs(selectedDate).format('ddd MMM DD')}</button>
                        </div>
                    </div>

            }


            <Line data={LineDataAvail} width={200} height={75} options={options} />
        </div>
    );
}

export default DataTime;
