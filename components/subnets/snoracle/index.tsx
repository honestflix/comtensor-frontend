"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from 'recharts';

const SnOracle: React.FC = () => {
    const [snData, setSnData] = useState<{ time: string; value: number }[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setError(null);
        try {
            const response = await axios.post(
                "https://api.comtensor.io/snporacle/",
                {},
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            );

            const data = response.data[0].prediction;
            const time = response.data[0].timestamp;
            const date = new Date(time);
            const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear().toString()}`;

            const newPoint = { time: formattedDate, value: data[4] };
            setSnData(prevData => [...prevData, newPoint]);
        } catch (error) {
            console.error('Error sending POST request:', error);
            setError('An error occurred while fetching data. Please try again later.');
        }
    };

    useEffect(() => {
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, []);

    const lastSevenData = snData.slice(-12);

    const calculateAverage = (data: any[]) => {
        if (data.length === 0) return 0;
        const sum = data.reduce((acc, point) => acc + point.value, 0);
        return sum / data.length;
    };

    const averageValue = calculateAverage(lastSevenData);

    const getMinMax = (data: any[]) => {
        const values = data.map(d => d.value);
        const min = Math.min(...values);
        const max = Math.max(...values);
        return [Math.floor(min), Math.ceil(max)];
    };

    const [minY, maxY] = getMinMax(lastSevenData);

    return (
        <div className="mt-12 items-center justify-center">
            <div className="flex items-center justify-center mt-12 p-4 rounded-sm text-white w-full bg-transparent rounded-md text-2xl">
                <header className="mt-24 flex flex-col items-center justify-center gap-4 md:flex-row md:items-stretch lg:gap-x-8">
                    <div className="relative shrink-0 w-32 h-32 aspect-square rounded-[2rem] overflow-hidden md:w-36 md:h-36">
                        <img src="images/subnets/Subnet_Mark/subnet-28.webp" style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent', visibility: 'visible' }} />
                    </div>
                    <div className="relative text-center gap-2 justify-between pt-11 lg:pt-0 lg:justify-start flex flex-col w-full md:text-left">
                        <div className="flex flex-col md:flex-row items-center md:items-end space-y-2 md:space-y-0">
                            <h1 className="text-t-textLight text-2xl md:text-5xl lg:text-8xl font-bold">S&P 500 Oracle</h1>
                        </div>
                        <p className="text-t-primary font-light lg:text-base">Foundry S&P 500 Oracle incentivizes price predictions.</p>
                    </div>
                </header>
            </div>
            <div className='flex flex-col mt-12 gap-y-12 lg:gap-y-24 gap-x-24 items-start justify-center'>
                <div className='w-full grid gap-y-8'>
                    <span className="font-semibold text-3xl text-t-textLight">What is Subnet 28 about?</span>
                    <span className="font-semibold text-xl text-t-textLight">Foundry is launching Foundry S&P 500 Oracle to incentivize miners to make predictions on the S&P 500 price frequently throughout trading hours. Validators send miners a timestamp (a future time) for which the miners need to make an S&P 500 price prediction for. Miners need to respond with their prediction for the price of the S&P 500 at the given time. Validators store the miner predictions, and then calculate the scores of the miners after the predictions mature. Miners are ranked against eachother, naturally incentivizing competition between the miners.</span>
                </div>
                <div className='w-full grid gap-y-8'>
                    <div className="grid grid-flow-row text-t-body grid-cols-2 md:grid-cols-4 gap-5">
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Emissions</span>
                            <span className="text-xl font-medium">2.842 %</span>
                        </div>
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Reg cost</span>
                            <span className="text-xl font-medium">1.000 τ</span>
                        </div>
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Regs enabled</span>
                            <span className="text-xl font-medium">
                                <span className="text-t-primary">YES</span>
                            </span>
                        </div>
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Subnet owner</span>
                            <a target="_blank" rel="noreferrer" className="text-t-body flex gap-1 hover:text-t-hover" href="https://x.taostats.io/account/5CiQ1cxLB1ABBJyf9FAR8CRhfcKgs4M8QaRgmHh318PKLqvb#transfers">
                                <span className="text-xl overflow-x-hidden font-medium">5ChuGqW2cxc5...</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="mt-12 flex items-center justify-center">
                {error ? (
                    <div>{error}</div>
                ) : (
                    <div style={{ width: '90%', height: 500 }}>
                        <ResponsiveContainer>
                            <LineChart data={lastSevenData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="time" />
                                <YAxis domain={[minY, maxY]} />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="value" stroke="red" strokeWidth={2} dot={{ r: 3 }} />
                                <ReferenceLine y={averageValue} label={`Avg: ${averageValue.toFixed(2)}`} stroke="green" strokeWidth={2} strokeDasharray="3 3" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </div>
        </div>

    );
};

export default SnOracle;
