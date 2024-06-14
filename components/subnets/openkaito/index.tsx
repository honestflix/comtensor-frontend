"use client"

import React, { useState } from "react";
import axios from "axios";
import KaitoResult from "./KaitoResult";
import { ApiResponse } from './types';
import Spinner from "../Spinner";

type FormEventHandler<T> = (event: React.FormEvent<T>) => void;

const OpenKaito = () => {
    const [inputValue, setInputValue] = useState('');
    const [responseData, setResponseData] = useState<ApiResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        console.log(inputValue);
    };
    const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            await axios.post(
                'https://api.comtensor.io/openkaito/',
                { query: inputValue },
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            )
                .then(response => {
                    const data: ApiResponse[] = response.data[0];
                    setResponseData(data);
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
                        <img src="images/subnets/Subnet_Mark/subnet-5.webp" style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent', visibility: 'visible' }} />
                    </div>
                    <div className="relative text-center gap-2 justify-between pt-11 lg:pt-0 lg:justify-start flex flex-col w-full md:text-left">
                        <div className="flex flex-col md:flex-row items-center md:items-end space-y-2 md:space-y-0">
                            <h1 className="text-t-textLight text-2xl md:text-5xl lg:text-8xl font-bold">Open-Kaito</h1>
                        </div>
                        <p className="text-t-primary font-light lg:text-base">OpenKaito, Subnet 5 from Kaito AI, decentralizes Web3 search with BitTensor's Yuma consensus, engaging the public for a smart search and analytics system with low latency.</p>
                    </div>
                </header>
            </div>
            <div className='flex flex-col mt-12 gap-y-12 lg:gap-y-24 gap-x-24 items-start justify-center'>
                <div className="relative inline-block">
                    <a href="#" className="inline-block px-4 py-2 rounded-lg bg-green-400 text-white border border-gray-700 shadow">
                        No APP
                    </a>
                    <span className="animate-ping absolute top-0 right-0 -mt-2 -mr-2 h-6 w-6 bg-blue-900 rounded-full border-2 border-red-200"></span>
                    <span className="absolute top-0 right-0 -mt-2 -mr-2 h-6 w-6 bg-red-400 rounded-full"></span>
                </div>
                <div className='w-full grid gap-y-8'>
                    <span className="font-semibold text-3xl text-t-textLight">What is Subnet 5 about?</span>
                    <span className="font-semibold text-xl text-t-textLight">Subnet 5, OpenKaito, is Kaito AI's initiative to decentralize its Web3 search platform. Overcoming operational challenges, it utilizes BitTensor's Yuma consensus and an AI-based nDCG evaluator for search relevance. The goal is to involve the public in building and benefiting from a decentralized smart search and analytics platform, featuring low latency and innovative caching mechanisms on validator nodes.</span>
                </div>
                <div className='w-full grid gap-y-8'>
                    <div className="grid grid-flow-row text-t-body grid-cols-2 md:grid-cols-4 gap-5">
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Emissions</span>
                            <span className="text-xl font-medium">4.445 %</span>
                        </div>
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Reg cost</span>
                            <span className="text-xl font-medium">2.634 τ</span>
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
                                <span className="text-xl overflow-x-hidden font-medium">5CFmgJ2SQZBjgdyDvwsWhAQatEENLt6k2gWvpkjeHeMm95yv</span>
                            </a>
                        </div>
                    </div>
                    <div className="items-center justify-center">
                        <div className="bg">
                            <div className="bg-white relative z-10" style={{ backgroundColor: '#151719' }}>
                                <div className="w-full flex flex-col justify-between relative">
                                    <form className="items-center pt-12 sm:pt-24 px-8" onSubmit={handleFormSubmit}>
                                        <div className="relative text-gray-600 focus-within:text-gray-400">
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                                </button>
                                            </span>
                                            <input
                                                type="search"
                                                name="q"
                                                className="w-full py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                                                placeholder="Search..."
                                                value={inputValue}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </form>
                                    <div className="justify-center items-center mt-12">
                                        {loading ? (
                                            <Spinner />
                                        ) : responseData.map((item, index) => (
                                            <KaitoResult
                                                key={index}
                                                username={item.username}
                                                text={item.text}
                                                favorite_count={item.favorite_count}
                                                quote_count={item.quote_count}
                                                reply_count={item.reply_count}
                                                retweet_count={item.retweet_count}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}


export default OpenKaito;