"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PoolTable from './PoolTable';

const pools = [
    { pool_id: '0', base_rate: 0, base_slope: 0.019, kink_slope: 0.92, optimal_util_rate: 0.8 },
    { pool_id: '1', base_rate: 0, base_slope: 0.019, kink_slope: 2.809, optimal_util_rate: 0.8 },
    { pool_id: '2', base_rate: 0, base_slope: 0.032, kink_slope: 2.124, optimal_util_rate: 0.8 },
    { pool_id: '3', base_rate: 0, base_slope: 0.017, kink_slope: 0.884, optimal_util_rate: 0.8 },
    { pool_id: '4', base_rate: 0, base_slope: 0.048, kink_slope: 0.816, optimal_util_rate: 0.8 },
    { pool_id: '5', base_rate: 0, base_slope: 0.03, kink_slope: 2.934, optimal_util_rate: 0.8 },
    { pool_id: '6', base_rate: 0, base_slope: 0.027, kink_slope: 1.094, optimal_util_rate: 0.8 },
    { pool_id: '7', base_rate: 0, base_slope: 0.033, kink_slope: 1.833, optimal_util_rate: 0.8 },
    { pool_id: '8', base_rate: 0, base_slope: 0.046, kink_slope: 0.7, optimal_util_rate: 0.8 },
    { pool_id: '9', base_rate: 0, base_slope: 0.026, kink_slope: 2.102, optimal_util_rate: 0.8 }
];


const SturdyPage: React.FC = () => {
    const [snData, setSnData] = useState<{ time: string; value: number }[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setError(null);
        try {
            await axios.post(
                "https://api.comtensor.io/sturdy",
                {},
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            )
                .then(response => {
                    const pools = response.data.assets_and_pools.pools;
                    setSnData(pools);
                })
                .catch(error => {
                    console.error('Error sending POST request:', error);
                    setError('An error occurred while fetching data. Please try again later.');
                })
        } catch (error) {
            console.error('Error sending POST request:', error);
            setError('An error occurred while fetching data. Please try again later.');
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="mt-12 items-center justify-center">
            <div className="flex items-center justify-center mt-12 p-4 rounded-sm text-white w-full bg-transparent rounded-md text-2xl">
                <header className="mt-24 flex flex-col items-center justify-center gap-4 md:flex-row md:items-stretch lg:gap-x-8">
                    <div className="relative shrink-0 w-32 h-32 aspect-square rounded-[2rem] overflow-hidden md:w-36 md:h-36">
                        <img src="images/subnets/Subnet_Mark/subnet-10.webp" style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent', visibility: 'visible' }} />
                    </div>
                    <div className="relative text-center gap-2 justify-between pt-11 lg:pt-0 lg:justify-start flex flex-col w-full md:d3">
                        <div className="flex flex-col md:flex-row items-center md:items-end space-y-2 md:space-y-0">
                            <h1 className="text-t-textLight text-2xl md:text-5xl lg:text-8xl font-bold">Sturdy</h1>
                        </div>
                        <p className="text-t-primary font-light lg:text-base">Sturdy Subnet is a Bittensor subnetwork that enables the creation of decentralized, autonomous yield optimizers.</p>
                    </div>
                </header>
            </div>
            <div className='flex flex-col mt-12 gap-y-12 lg:gap-y-24 gap-x-24 items-start justify-center'>
                <div className="relative inline-block">
                    <a href="https://sturdy.finance/" className="inline-block px-4 py-2 rounded-lg bg-green-400 text-white border border-gray-700 shadow">
                        Launch App
                    </a>
                    <span className="animate-ping absolute top-0 right-0 -mt-2 -mr-2 h-6 w-6 bg-blue-900 rounded-full border-2 border-red-200"></span>
                    <span className="absolute top-0 right-0 -mt-2 -mr-2 h-6 w-6 bg-red-400 rounded-full"></span>
                </div>
                <div className='w-full grid gap-y-8 rounded border border-t-bg03 bg-t-bg02 p-4 px-6'>
                    <span className="font-semibold text-3xl text-t-textLight">What is Subnet 10 about?</span>
                    <span className="font-semibold text-xl text-t-textLight">The Sturdy protocol is a lending platform on Ethereum and Mode with $50m TVL backed by Pantera and Y Combinator. Projects including Renzo, Ether.fi, Kelp, Sommelier, LlamaRisk, Redacted Cartel, and Swell have all deployed pools on Sturdy. But this is just the first application! Several others are already working on integrating the subnet, including some of DeFi's largest protocols. There's over $35b locked in DeFi lending and yield applications -- Sturdy wanta all of them to tap into the Subnet for optimal, decentralized, and permissionless yields.</span>
                </div>
                <div className='w-full grid gap-y-8'>
                    <div className="grid grid-flow-row text-t-body grid-cols-2 md:grid-cols-4 gap-5">
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Emissions</span>
                            <span className="text-xl font-medium">2.831 %</span>
                        </div>
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Reg cost</span>
                            <span className="text-xl font-medium">1.969 τ</span>
                        </div>
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Regs enabled</span>
                            <span className="text-xl font-medium">
                                <span className="text-t-primary">YES</span>
                            </span>
                        </div>
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Subnet owner</span>
                            <a target="_blank" rel="noreferrer" className="text-t-body flex gap-1 hover:text-t-hover" href="https://x.taostats.io/account/5DAfa5WvYA66x4DPm9wqGRRw9PCcSdNowjG8YiJV1ohJ9BpL#transfers">
                                <span className="text-xl overflow-x-hidden font-medium">5DAfa5WvYA66x4DPm9wqGRRw9PCcSdNowjG8YiJV1ohJ9BpL</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <PoolTable pools={pools} />
        </div>
    );
};

export default SturdyPage;
