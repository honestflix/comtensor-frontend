"use client";

import React, { useState } from 'react';
import axios from 'axios';

type FormEventHandler<T> = (event: React.FormEvent<T>) => void;

const WomboAI: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [responseData, setResponseData] = useState<string[]>([]); // Change to array of strings
    const [loading, setLoading] = useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(
                'https://api.comtensor.io/wombo/',
                {
                    watermark: true,
                    prompt: inputValue,
                },
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            );
            const data = response.data[0].output.frames;
            const videoResponse = await axios.post('/api/hello/generate-video', { data });

            if (videoResponse.data.videoUrl) {
                window.location.href = videoResponse.data.videoUrl;
            }
            setResponseData(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error('Error sending POST request:', error);
        }
    };

    const handleRefresh = () => {
        setInputValue('');
        setResponseData([]);
    };

    return (
        <div className="mt-12 items-center justify-center">
            <div className="flex items-center justify-center mt-12 p-4 rounded-sm text-white w-full bg-transparent rounded-md text-2xl">
                <header className="mt-24 flex flex-col items-center justify-center gap-4 md:flex-row md:items-stretch lg:gap-x-8">
                    <div className="relative shrink-0 w-32 h-32 aspect-square rounded-[2rem] overflow-hidden md:w-36 md:h-36">
                        <img src="images/subnets/Subnet_Mark/subnet-30.webp" style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent', visibility: 'visible' }} />
                    </div>
                    <div className="relative text-center gap-2 justify-between pt-11 lg:pt-0 lg:justify-start flex flex-col w-full md:text-left">
                        <div className="flex flex-col md:flex-row items-center md:items-end space-y-2 md:space-y-0">
                            <h1 className="text-t-textLight text-2xl md:text-5xl lg:text-8xl font-bold">Wombo</h1>
                        </div>
                        <p className="text-t-primary font-light lg:text-base">WOMBO is an AI-powered app that transforms simple inputs into creative outputs.</p>
                    </div>
                </header>
            </div>
            <div className='flex flex-col mt-12 gap-y-12 lg:gap-y-24 gap-x-24 items-start justify-center'>
                <div className="relative inline-block">
                    <a href="https://dream.ai/" className="inline-block px-4 py-2 rounded-lg bg-green-400 text-white border border-gray-700 shadow">
                        Launch App
                    </a>
                    <span className="animate-ping absolute top-0 right-0 -mt-2 -mr-2 h-6 w-6 bg-blue-900 rounded-full border-2 border-red-200"></span>
                    <span className="absolute top-0 right-0 -mt-2 -mr-2 h-6 w-6 bg-red-400 rounded-full"></span>
                </div>
                <div className='w-full grid gap-y-8'>
                    <span className="font-semibold text-3xl text-t-textLight">What is Subnet 30 about?</span>
                    <span className="font-semibold text-xl text-t-textLight">WOMBO, a trailblazer in AI-driven creativity, has made a significant impact with over 100 million downloads and 1 billion creations. It stands at the forefront of enhancing human creativity through innovative tools like WOMBO Dream and WOMBOT, allowing users to generate art and memes from simple inputs. Backed by prominent investors, WOMBO embodies the fusion of technology and artistry, aiming to be the happiest corner on the internet. Through its commitment to unlocking the creative genius in everyone, WOMBO is reshaping the way we imagine and create content.</span>
                </div>
                <div className='w-full grid gap-y-8'>
                    <div className="grid grid-flow-row text-t-body grid-cols-2 md:grid-cols-4 gap-5">
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Emissions</span>
                            <span className="text-xl font-medium">1.765 %</span>
                        </div>
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Reg cost</span>
                            <span className="text-xl font-medium">0.500 τ</span>
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
                                <span className="text-xl overflow-x-hidden font-medium">5EX6mRBeHVQ</span>
                            </a>
                        </div>
                    </div>
                    <iframe
                        src="https://dream.ai/"
                        width="100%"
                        height="800"
                        className='mt-4 rounded-sm'
                        sandbox="allow-scripts allow-same-origin"
                        loading='lazy'
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default WomboAI;
