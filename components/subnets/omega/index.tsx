"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SturdyPage: React.FC = () => {
    const [snData, setSnData] = useState<[]>([]);
    const [hotkey, setHotkey] = useState<[]>([]);
    const [size, setsize] = useState<number>(0);
    const [secondData, setSecondData] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 10;
    const maxPageButtons = 10;

    useEffect(() => {
        const fetchDataFromFile = async () => {
            try {
                const response = await fetch('./data.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                if (Array.isArray(data)) {
                    setSecondData(data);
                } else {
                    setError('Data format is incorrect');
                }
            } catch (error) {
                console.error('Error reading data from file:', error);
                setError('An error occurred while reading data. Please try again later.');
            }
        };

        fetchDataFromFile();
    }, []);

    const fetchData = async () => {
        setError(null);
        try {
            const response1 = await axios.get(
                "https://api.comtensor.io/omegalist/"
            );
            const data = response1.data;
            setSnData(data);
        } catch (error) {
            console.error('Error sending POST request:', error);
            setError('An error occurred while fetching data. Please try again later.');
        }
    };

    const fetchSecondData = async () => {
        setError(null);
        try {
            const response2 = await axios.post(
                "https://api.comtensor.io/omegalabs/",
                {
                    query: snData,
                }
            );
            const newData = response2.data[0].query;
            const size = response2.data[0].total_size;
            const hotkey = response2.data[0].dendrite.hotkey;
            setSecondData(prevData => [...prevData, { query: newData, size, hotkey }]);
            setHotkey(hotkey);
            setsize(size);
        } catch (error) {
            console.error('Error sending POST request:', error);
            setError('An error occurred while fetching data. Please try again later.');
        }
    };
    useEffect(() => {
        fetchData(); // Fetch initial data immediately
        const interval = setInterval(fetchData, 5000); // Fetch data periodically
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (snData.length > 0) {
            fetchSecondData();
            const interval = setInterval(fetchData, 5000); // Fetch data periodically
            return () => clearInterval(interval);
        }
    }, [snData]);

    const totalPages = Math.ceil(secondData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = secondData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const handlePageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const page = Number(e.target.value);
        if (page >= 1 && page <= totalPages) {
            paginate(page);
        }
    };

    const renderPaginationButtons = () => {
        const buttons = [];
        const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
        const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <li key={i} className="mx-1">
                    <button
                        onClick={() => paginate(i)}
                        className={`${i === currentPage ? 'bg-gray-400' : ''
                            } px-3 py-1 rounded-md`}
                    >
                        {i}
                    </button>
                </li>
            );
        }

        return buttons;
    };

    return (
        <div className="mt-12 items-center justify-center">
            <div className="flex items-center justify-center mt-12 p-4 rounded-sm text-white w-full bg-transparent rounded-md text-2xl">
                <header className="mt-24 flex flex-col items-center justify-center gap-4 md:flex-row md:items-stretch lg:gap-x-8">
                    <div className="relative shrink-0 w-32 h-32 aspect-square rounded-[2rem] overflow-hidden md:w-36 md:h-36">
                        <img src="images/subnets/Subnet_Mark/subnet24.webp" style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent', visibility: 'visible' }} />
                    </div>
                    <div className="relative text-center gap-2 justify-between pt-11 lg:pt-0 lg:justify-start flex flex-col w-full md:d3">
                        <div className="flex flex-col md:flex-row items-center md:items-end space-y-2 md:space-y-0">
                            <h1 className="text-t-textLight text-2xl md:text-5xl lg:text-8xl font-bold">Omega</h1>
                        </div>
                        <p className="text-t-primary font-light lg:text-base"><span style={{ color: 'green' }}></span>OMEGA Labs leverages a vast dataset to pioneer AGI research with the OMEGA Bittensor subnet.</p>
                    </div>
                </header>
            </div>
            <div className='flex flex-col mt-12 gap-y-12 lg:gap-y-24 gap-x-24 items-start justify-center'>
                <div className="relative inline-block">
                    <a href="" className="inline-block px-4 py-2 rounded-lg bg-green-400 text-white border border-gray-700 shadow">
                        Launch App
                    </a>
                    <span className="animate-ping absolute top-0 right-0 -mt-2 -mr-2 h-6 w-6 bg-blue-900 rounded-full border-2 border-red-200"></span>
                    <span className="absolute top-0 right-0 -mt-2 -mr-2 h-6 w-6 bg-red-400 rounded-full"></span>
                </div>
                <div className='w-full grid gap-y-8 rounded border border-t-bg03 bg-t-bg02 p-4 px-6'>
                    <span className="font-semibold text-3xl text-t-textLight">What is Subnet 24 about?</span>
                    <span className="font-semibold text-xl text-t-textLight">OMEGA Labs, evolving from the success of WOMBO, embarks on an AGI-focused journey, leveraging the OMEGA Bittensor subnet and the Tao community to create the world's largest decentralized multimodal dataset for groundbreaking AI research.</span>
                    <span className="font-semibold text-xl text-t-textLight">By harnessing the power of the Bittensor network and a global community of miners and validators, we are building a dataset that surpasses the scale and diversity of existing resources. With over 1 million hours of footage and 30 million+ 2-minute video clips, the OMEGA Labs dataset will enable the development of powerful AGI models and transform various industries.</span>
                </div>
                <ul className='w-full grid gap-y-4 rounded border border-t-bg03 bg-t-bg02 p-4 px-6'>
                    <li className="font-semibold text-xl text-t-textLight">🌍 Unparalleled Scale and Diversity: 1 million+ hours of footage, 30 million+ video clips, covering 50+ scenarios and 15,000+ action phrases.</li>
                    <li className="font-semibold text-xl text-t-textLight">🧠 Latent Representations: Leveraging state-of-the-art models to translate video components into a unified latent space for efficient processing.</li>
                    <li className="font-semibold text-xl text-t-textLight">💰 Incentivized Data Collection: Rewarding miners for contributing high-quality, diverse, and novel videos through a decentralized network.</li>
                    <li className="font-semibold text-xl text-t-textLight">🤖 Empowering Digital Agents: Enabling the development of intelligent agents that can navigate complex workflows and assist users across platforms.</li>
                    <li className="font-semibold text-xl text-t-textLight">🎮 Immersive Gaming Experiences: Facilitating the creation of realistic gaming environments with rich physics and interactions.</li>
                </ul>
                <div className='w-full grid gap-y-8'>
                    <div className="grid grid-flow-row text-t-body grid-cols-2 md:grid-cols-4 gap-5">
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Emissions</span>
                            <span className="text-xl font-medium">2.053 %</span>
                        </div>
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Reg cost</span>
                            <span className="text-xl font-medium">0.400 τ</span>
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
                                <span className="text-xl overflow-x-hidden font-medium">5G9aQqxT3VNiRA93CBn1sv2ZEgkofecr7opKahxXSG9YvxeV</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <h2 className='text-2xl font-semibold text-t-textLight mb-4'>📄 Omega Data Labs</h2>
                    {secondData.length > 0 ? (
                        <>
                            <table className="min-w-full bg-transpanrent border border-gray-300">
                                <thead className='bg-gray-800 text-xs uppercase font-medium'>
                                    <tr>
                                        <th className="px-6 py-3 text-center tracking-wider">ID</th>
                                        <th className="px-6 py-3 text-center tracking-wider">Query</th>
                                        <th className="px-6 py-3 text-center tracking-wider">Number of Videos</th>
                                        <th className="px-6 py-3 text-center tracking-wider">Total Size</th>
                                        <th className="px-6 py-3 text-center tracking-wider">Hotkey</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.map((data, index) => (
                                        <tr key={index} className="text-center hover:bg-purple-500">
                                            <td className="px-6 py-3 text-center tracking-wider border-t-2">{indexOfFirstItem + index + 1}</td>
                                            <td className="px-6 py-3 text-center tracking-wider border-t-2">{data.query}</td>
                                            <td className="px-6 py-3 text-center tracking-wider border-t-2">8</td>
                                            <td className="px-6 py-3 text-center tracking-wider border-t-2">{data.size}</td>
                                            <td className="px-6 py-3 text-center tracking-wider border-t-2">{data.hotkey}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="flex justify-between mt-4">
                                <ul className="flex">
                                    {currentPage > 1 && (
                                        <li className="mx-1">
                                            <button
                                                onClick={() => paginate(currentPage - 1)}
                                                className="px-3 py-1 rounded-md"
                                            >
                                                &laquo;
                                            </button>
                                        </li>
                                    )}
                                    {renderPaginationButtons()}
                                    {currentPage < totalPages && (
                                        <li className="mx-1">
                                            <button
                                                onClick={() => paginate(currentPage + 1)}
                                                className="px-3 py-1 rounded-md"
                                            >
                                                &raquo;
                                            </button>
                                        </li>
                                    )}
                                </ul>
                                <div className="flex items-center">
                                    <p className="mr-4">Total data sets: {secondData.length}</p>
                                    <input
                                        type="number"
                                        min="1"
                                        max={totalPages}
                                        value={currentPage}
                                        onChange={handlePageInput}
                                        className="px-2 py-1 rounded-md border border-gray-300"
                                    />
                                </div>
                            </div>
                        </>
                    ) : (
                        <p>No data available</p>
                    )}
                </div>
                {error && <p className="text-red-500">{error}</p>}
            </div>
            {/* <iframe
                src="https://v2.sturdy.finance/"
                width="100%"
                height="1000"
                className='mt-4 rounded-sm'
                sandbox="allow-scripts allow-same-origin allow-popups"
                loading='lazy'
            ></iframe> */}
        </div>
    );
};

export default SturdyPage;
