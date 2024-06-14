"use client"

import React, { useState } from 'react';
import axios from 'axios';
import Spinner from '../Spinner';

type FormEventHandler<T> = (event: React.FormEvent<T>) => void;

const BitAgent: React.FC = () => {

    const [inputValue, setInputValue] = useState('');
    const [bitprompt, setBitPrompt] = useState('');
    const [bitresponse, setBitResponse] = useState('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState('');

    const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        setLoading(true);
        setError('');
        setBitPrompt('');
        setBitResponse('');

        try {
            await axios.post(
                "https://api.comtensor.io/bitagent/",
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            )
                .then(reply => {
                    const prompt = reply.data[0].prompt;
                    const response = reply.data[0].response.response;
                    setBitPrompt(prompt);
                    setBitResponse(response);
                    setLoading(false);
                }
                )
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
        <div className="min-h-screen flex items-center justify-center"
        >
            <form className="bg-transparent p-6 rounded-lg shadow-md w-[600px]" onSubmit={handleFormSubmit}>
                <div className="flex items-center transparent justify-center mt-4">
                    <img src="images/subnets/subnet-20.webp" alt="Logo" className="w-60 h-60 rounded-full" />
                </div>
                <h1 className="text-4xl font-bold mb-4 text-center mt-4">BitAgent</h1>
                <h3 className="text-2xl font-bold mb-4 text-center mt-4">Real-time data tasking and natural language-driven application orchestration.</h3>
                <div className="flex flex-col space-y-4">
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    <button type="submit" className='flex text-2xl border bg-pink-700 hover:bg-pink-800 w-full items-center justify-center py-4 rounded-full'>
                        <span>{loading ? 'Generating...' : 'BitAgent'}</span>
                    </button>
                </div>
                {
                    loading ? (
                        <Spinner />
                    ) : (
                        <>
                            <h1 className='text-xl'>Prompt Here:</h1>
                            <hr />
                            <div className="mt-1 bg-gray-100 p-4 rounded text-black rounded-md">
                                {bitprompt}
                            </div>
                            <h1 className='mt-4 text-xl'>Analysis Response:</h1>
                            <hr />
                            <div className="mt-1 bg-gray-100 p-4 rounded text-black rounded-md">
                                {bitresponse}
                            </div>
                        </>
                    )
                }
            </form>
        </div>
    );
};

export default BitAgent;
