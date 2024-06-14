"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

type FormEventHandler<T> = (event: React.FormEvent<T>) => void;

interface ServerResponse {
    availability: number;
    latency: number;
    reliability: number;
    distribution: number;
    score: number;
    timestamp: string;
}

const Subvortex: React.FC = () => {
    const [data, setData] = useState<ServerResponse[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            await axios.post<ServerResponse>(
                "https://api.comtensor.io/subvortex/",
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            )
                .then(response => {
                    const responseData = { ...response.data, timestamp: new Date().toLocaleString() };
                    setError(null);
                    setData(prevData => {
                        if (prevData.length >= 6) {
                            const newData = prevData.slice(1);
                            return [...newData, responseData];
                        } else {
                            return [...prevData, responseData];
                        }
                    });
                })
                .catch(error => {
                    console.error('Error sending POST request:', error);
                    setError('An error occurred while fetching data. Please try again later.');
                });
        } catch (error) {
            console.error('Error sending POST request:', error);
            setError('An error occurred while fetching data. Please try again later.');
        }
    };

    useEffect(() => {
        const interval = setInterval(fetchData, 3000);
        return () => clearInterval(interval);
    }, []);

    const customTickFormatter = (timestamp: string) => {
        return new Date(timestamp).toLocaleTimeString();
    };

    return (
        <div className="mt-12 items-center justify-center">
            <div className="flex items-center justify-center mt-12 p-4 rounded-sm text-white w-full bg-transparent rounded-md text-2xl">
                <header className="mt-24 flex flex-col items-center justify-center gap-4 md:flex-row md:items-stretch lg:gap-x-8">
                    <div className="relative shrink-0 w-32 h-32 aspect-square rounded-[2rem] overflow-hidden md:w-36 md:h-36">
                        <img src="images/subnets/Subnet_Mark/subnet-7.webp" style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent', visibility: 'visible' }} />
                    </div>
                    <div className="relative text-center gap-2 justify-between pt-11 lg:pt-0 lg:justify-start flex flex-col w-full  md:text-left">
                        <div className="flex flex-col md:flex-row items-center md:items-end space-y-2 md:space-y-0">
                            <h1 className="text-t-textLight text-2xl md:text-5xl lg:text-8xl font-bold">SubVortex</h1>
                        </div>
                        <p className="text-t-primary font-light lg:text-base">SubVortex boosts Bittensor with decentralized subtensor nodes for improved stability and efficiency.</p>
                    </div>
                </header>
            </div>
            <div className='flex flex-row mt-12 gap-y-12 lg:gap-y-24 gap-x-24 items-start justify-center'>
                <div className='w-[80%] grid gap-y-8'>
                    <span className="font-semibold text-3xl text-t-textLight">What is Subnet 7 about?</span>
                    <span className="font-semibold text-2xl text-t-textLight">SubVortex introduces an incentivized, decentralized network of subtensor nodes, integral to the Bittensor ecosystem, aimed at promoting decentralization, stability, and efficient resource distribution, thereby enhancing the network's overall functionality and governance.</span>
                </div>
                <div className='w-[80%] grid gap-y-8'>
                    <div className="grid grid-flow-row text-t-body grid-cols-2 md:grid-cols-4 w-full gap-5">
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Emissions</span>
                            <span className="text-xl font-medium">2.477 %</span>
                        </div>
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Reg cost</span>
                            <span className="text-xl font-medium">1.646 τ</span>
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
                                <span className="text-xl overflow-x-hidden font-medium">5CiQ1cxLB1AB...</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 p-4 rounded-sm text-white w-full bg-transparent rounded-md text-2xl">
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <XAxis dataKey="timestamp" tickFormatter={customTickFormatter} />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="availability" fill="#f70202" />
                        <Bar dataKey="latency" fill="#a4aba7" />
                        <Bar dataKey="score" fill="#5cdb35" />
                        <Bar dataKey="reliability" fill="#7534ed" />
                        <Bar dataKey="distribution" fill="#bf1194" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Subvortex;
