


"use client"


import React, { use, useCallback, useEffect, useState } from 'react';


import { useForm } from 'react-hook-form';

import { Line } from 'react-chartjs-2';

import { LineData, options } from '../LineChart';

type FormValues = {
    month: string;
    type: string;
};


type DataTimeProps = {
    time: string;

}

function DataTime(props: DataTimeProps) {
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
        'Saturday',
        'Sunday',
    ];
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



    const { register, handleSubmit, watch } = useForm<FormValues>();
    const [day, setdays] = useState("Monday");
    const [year, setyears] = useState("2019");
    const [month, setmonth] = useState("January");
    const [showWhat, setshowWhat] = useState<string>("day")
    const [FilterData, setFilterData] = useState<string[]>(days);
    const [time, settime] = useState(props.time);


    const onSubmit = (data: FormValues) => {
        console.log(data); // Access the selected month value through data.month
    };
    const On1Submit = (data: FormValues) => {
        console.log(data);

    };

    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setshowWhat(event.target.value);
        if (event.target.value === 'day') {
            setdays("day");
            setFilterData(days);
        } else if (event.target.value === 'year') {
            setdays("year");
            setFilterData(years)
        } else if (event.target.value === 'month') {
            setdays("month");
            setFilterData(months)
        } else if (event.target.value === 'Today') {
            setdays("today");
            setFilterData(today)
        }
    };
    const handleSearchChange = (event: React.ChangeEvent<HTMLSelectElement>) => {

    }


    console.log("show what type", showWhat);


    return (
        <div>
            <div className=' flex flex-row justify-between items-center w-full '>
                <div className=' flex items-start'> 
                    <form onSubmit={handleSubmit(On1Submit)} className=' flex items-center justify-center' >
                        <select {...register("type")} onChange={handleTypeChange}>
                            <option value="day">Days</option>
                            <option value="year">Year</option>
                            <option value="month">Month</option>
                            <option value="Today">Today</option>

                        </select>
                        {/* <input type="submit" value="Submit" /> */}


                    </form>
                </div>
                <div className=' flex items-end  '>


                    <form onSubmit={handleSubmit(onSubmit)} className=' flex items-center justify-center'>
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

                </div>
               

            </div>
            <Line data={LineData} width={200} height={75} options={options} />
        </div>
    );
}

export default DataTime;
