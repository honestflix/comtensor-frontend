"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../Spinner';

type FormEventHandler<T> = (event: React.FormEvent<T>) => void;

const Compute: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [pwd, setPwd] = useState('Password');
    const [time, setTime] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        console.log(inputValue);
    };

    const handleRefresh = () => {
        setInputValue('');
        setPwd('Password');
        setTime(0);
    }
    const fetchData: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            await axios.post(
                "https://api.comtensor.io/compute/",
                {
                    difficulty: inputValue,
                },
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            )
                .then(response => {
                    const pwd = response.data[0].password;
                    const time = response.data[0].local_execution_time;
                    setPwd(pwd);
                    setTime(time);
                    setLoading(false);
                })
                .catch(error => {
                    setLoading(false);
                    console.error('Error sending POST request:', error);
                });
        } catch (error) {
            setLoading(false);
            console.error('Error sending POST request:', error);

        }
    };


    return (
        <div className="mt-12 items-center justify-center">
            <div className="flex items-center justify-center mt-12 p-4 rounded-sm text-white w-full bg-transparent rounded-md text-2xl">
                <header className="mt-24 flex flex-col items-center justify-center gap-4 md:flex-row md:items-stretch lg:gap-x-8">
                    <div className="relative shrink-0 w-32 h-32 aspect-square rounded-[2rem] overflow-hidden md:w-36 md:h-36">
                        <img src="images/subnets/Subnet_Mark/subnet-27.webp" style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent', visibility: 'visible' }} />
                    </div>
                    <div className="relative text-center gap-2 justify-between pt-11 lg:pt-0 lg:justify-start flex flex-col w-full  md:text-left">
                        <div className="flex flex-col md:flex-row items-center md:items-end space-y-2 md:space-y-0">
                            <h1 className="text-t-textLight text-2xl md:text-5xl lg:text-8xl font-bold">Compute</h1>
                        </div>
                        <p className="text-t-primary font-light lg:text-base">Decentralized AI computing enhancement via Bittensor network.</p>
                    </div>
                </header>
            </div>
            <div className='flex flex-col mt-12 gap-y-12 lg:gap-y-24 gap-x-24 items-start justify-center'>
                <div className='w-full grid gap-y-8'>
                    <span className="font-semibold text-3xl text-t-textLight">What is Subnet 27 about?</span>
                    <span className="font-semibold text-xl text-t-textLight">This subnet aims to enhance decentralized computing capabilities, focusing on improving efficiency and scalability for AI computations. It leverages the Bittensor framework to facilitate collaborative computing power across a distributed network, supporting the execution of sophisticated AI models and tasks. The project emphasizes creating a more accessible and powerful computing platform for AI development in a decentralized environment.</span>
                </div>
                <div className='w-full grid gap-y-8'>
                    <div className="grid grid-flow-row text-t-body grid-cols-2 md:grid-cols-4 gap-5">
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Emissions</span>
                            <span className="text-xl font-medium">1.868 %</span>
                        </div>
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Reg cost</span>
                            <span className="text-xl font-medium">0.488 τ</span>
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
                                <span className="text-xl overflow-x-hidden font-medium">by </span>
                            </a>
                        </div>
                    </div>
                    <form onSubmit={fetchData}>
                        {
                            loading ? (
                                <Spinner />
                            ) : (
                                <>
                                    <div className='text-2xl'>
                                        Difficulty {inputValue} challenge ID {inputValue}-1: ✅ Result <span style={{ color: 'red' }}>({pwd})</span> found in <span style={{ color: 'green' }}>{time}</span> seconds!
                                    </div>
                                    <div className='text-2xl'>
                                        Difficulty {inputValue} | Successfully solved 1/1 challenge(s) (100.00%) with an average solve time of <span style={{ color: 'green' }}>{time}</span> seconds.
                                    </div>
                                </>
                            )
                        }
                        <div className='flex justify-around text-2xl mt-12 space-x-12'>
                            <input type="number" className='w-1/4 border rounded-md border-gray-200 bg-transparent px-4 py-4' name="" id="" max={13} min={5} onChange={handleInputChange} placeholder='Be sure to enter a number from 6 to 12.' />
                            <input type="submit" className='w-1/4 border border-gray-200 rounded-md bg-pink-800 px-4 py-4 hover:bg-pink-700' value="Submit" />
                            <input type="button" className='w-1/4 border border-gray-200 rounded-md bg-pink-800 px-4 py-4 hover:bg-pink-700' value="Refresh" onClick={handleRefresh} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Compute;
