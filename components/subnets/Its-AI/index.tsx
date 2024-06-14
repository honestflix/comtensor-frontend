"use client"

import React, { useState } from "react";
import axios from "axios";
import ItsaiResult from "./ItsaiResult";
import { ApiResponse } from './types';
import Spinner from "../Spinner";

type FormEventHandler<T> = (event: React.FormEvent<T>) => void;

const ItsAi = () => {
    const [inputValue, setInputValue] = useState('');
    const [responseData, setResponseData] = useState<ApiResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(false);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        console.log(inputValue);
    };

    const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            axios.post(
                'https://api.comtensor.io/itsai/',
                { texts: inputValue },
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            )
                .then(response => {
                    console.log(response.data[0][1])
                    const data: ApiResponse[] = response.data[0];
                    setResponseData(data); 
                    setLoading(false);
                })
                .catch(error => {
                    setLoading(false);
                    console.error('Error sending POST request:', error);
                })
        } catch (error) {
            console.error('Error sending POST request:', error);
        }
    };

    return (
        <div className="mt-[40px]">
            <div className="flex flex-col items-center justify-center">
                <div className="bg">
                    <div className="bg-white relative z-10" style={{ backgroundColor: '#151719' }}>
                        <div className="h-screen w-full flex flex-col justify-between relative">
                            <form className="flex flex-col items-center flex-grow pt-12 sm:pt-24 px-8" onSubmit={handleFormSubmit}>
                                <h1 className="font-bold text-[#95ADBD] opacity-100 font-[&#x27;Poppins&#x27;] 2xl:text-5xl xl:text-[112px] md:text-6xl text-3xl mt-12">LLM Detection Platform by It's AI</h1>
                                <p className="text-gray-500 sm:text-2xl text-2xl mt-4 mb-4">Version 1.0.</p>
                                <div className="w-4/5 border border-outline border-gray-200 py-4 px-4 rounded-xl">
                                    <span className="text-base">
                                        <span style={{ color: 'green' }} className="font-bold">Note : </span> Keep in mind that this is only MVP version of the website. Only English language is supported. Estimated prediction time is under 5s.
                                    </span>
                                </div>
                                <div className="mt-4">
                                    <span>
                                        Please enter your text in the field below :
                                    </span>
                                </div>
                                <input
                                    className="w-4/5 bg-transparent py-4 px-4 rounded-md text-white outline-none text-black
                    hover:bg-gray-10 focus:border-primary duration-300 transition-all mt-4 mb-12"
                                    placeholder="Enter the text you want to analyze(minimum 250 characters)"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                />
                                <span>Or choose a text file</span>
                                <div className="w-4/5 border border-outline border-gray-200 py-8 px-4 rounded-xl flex justify-between">
                                    <span className="text-base ">
                                        <span style={{ color: 'gray' }} className="font-bold">Drag and drop file here</span>
                                    </span>
                                    <button className="text-base" typeof="file">
                                        <span className="font-bold border border-outline border-blue-900 border-2 py-2 px-4 rounded-md text-white">Browse files</span>
                                    </button>
                                </div>
                                <button className="text-base mt-4" type="submit">
                                    <span className="font-bold border border-outline border-blue-900 border-2 py-2 px-4 rounded-md text-white">Submit</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="justify-center items-center">
                    {loading ? (
                        <Spinner /> 
                    ) : responseData.map((item, index) => (
                        <ItsaiResult
                            key={index} 
                            texts={item.texts}
                            predictions={item.predictions}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}


export default ItsAi;