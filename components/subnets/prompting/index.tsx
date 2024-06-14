"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import comImage from '@/public/images/commune-logo.svg';
import userImage from '@/public/images/male-user-icon.webp';
import axios from 'axios';
type ConversationType = {
    role: string;
    content: string;
}


const Prompting = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [conversation, setConversation] = useState<ConversationType[]>([]);
    const [inputVal, setInputValue] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const conversationScroll = useRef<HTMLDivElement>(null);
    const [textPromptItems, setTextPromtItems] = useState<TextPromptItem>({ roles: [], messages: [] });

    useEffect(() => {
        function handleKeyPress(event: KeyboardEvent) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        }

        const inputElement = inputRef.current!;

        if (inputElement) {
            inputElement.addEventListener('keypress', handleKeyPress);

            return () => {
                inputElement.removeEventListener('keypress', handleKeyPress);
            };
        }

    }, [inputVal]);

    useEffect(() => {

        if (conversationScroll.current) {
            const targetScrollTop = conversationScroll.current.scrollHeight - conversationScroll.current.clientHeight;
            conversationScroll.current.scrollTop = targetScrollTop;
        }

    }, [conversation]);

    interface TextPromptItem {
        roles: string[];
        messages: string[];
    }

    // Define an async function to perform the POST request
    async function postTextPrompting(item: TextPromptItem): Promise<any> {
        try {
            const response = await axios.post(`https://api.comtensor.io/prompting/`, item);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Axios error message:', error.message);
                return error.message;
            } else {
                console.error('Unexpected error:', error);
                return 'An unexpected error occurred';
            }
        }
    }

    const onSendQueryHandle = async () => {
        const data = {
            role: 'user',
            content: inputVal
        }
        // setTextPromtItems(prev => ({...prev, messages: [inputVal]}));
        // setTextPromtItems({roles : [...textPromptItems.roles, 'user'], messages: [...textPromptItems.messages, inputVal]});
        const newTextPromptItems = { roles: [...textPromptItems.roles, 'user'], messages: [...textPromptItems.messages, inputVal] };
        setConversation(prev => [...prev, data]);
        setLoading(true);
        console.log(newTextPromptItems);
        postTextPrompting(newTextPromptItems).then((response) => {
            console.log(response[0]);
            const data = {
                role: 'assistant',
                content: response[0].completion
            }
            setConversation(prev => [...prev, data]);
            setTextPromtItems({ roles: [...textPromptItems.roles], messages: [...textPromptItems.messages, inputVal, response[0].completion] });
        })
            .catch((error) => {
                console.error('Error:', error);
            });

        setLoading(false);
    }


    const sendMessage = () => {
        if (inputVal == '') {
            return;
        }

        onSendQueryHandle();
        setInputValue('');
    }


    return (
        <div className="mt-12 items-center justify-center">
            <div className="flex items-center justify-center mt-12 p-4 rounded-sm text-white w-full bg-transparent rounded-md text-2xl">
                <header className="mt-24 flex flex-col items-center justify-center gap-4 md:flex-row md:items-stretch lg:gap-x-8">
                    <div className="relative shrink-0 w-32 h-32 aspect-square rounded-[2rem] overflow-hidden md:w-36 md:h-36">
                        <img src="images/subnets/Subnet_Mark/subnet-1.webp" style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent', visibility: 'visible' }} />
                    </div>
                    <div className="relative text-center gap-2 justify-between pt-11 lg:pt-0 lg:justify-start flex flex-col w-full md:text-left">
                        <div className="flex flex-col md:flex-row items-center md:items-end space-y-2 md:space-y-0">
                            <h1 className="text-t-textLight text-2xl md:text-5xl lg:text-8xl font-bold">Text Prompting</h1>
                        </div>
                        <p className="text-t-primary font-light lg:text-base">Incentivizes AI-driven conversational intelligence development.</p>
                    </div>
                </header>
            </div>
            <div className='flex flex-col mt-12 gap-y-12 lg:gap-y-24 gap-x-24 items-start justify-center'>
                <div className="relative inline-block">
                    <a href="" className="inline-block px-4 py-2 rounded-lg bg-green-400 text-white border border-gray-700 shadow">
                        No App
                    </a>
                    <span className="animate-ping absolute top-0 right-0 -mt-2 -mr-2 h-6 w-6 bg-blue-900 rounded-full border-2 border-red-200"></span>
                    <span className="absolute top-0 right-0 -mt-2 -mr-2 h-6 w-6 bg-red-400 rounded-full"></span>
                </div>
                <div className='w-full grid gap-y-8'>
                    <span className="font-semibold text-3xl text-t-textLight">What is Subnet 1 about?</span>
                    <span className="font-semibold text-xl text-t-textLight">Subnet 1 in the Bittensor network is dedicated to incentivizing the development of conversational intelligence at an internet scale. It serves as a platform for advancing AI communication technologies, where participants are rewarded for their contributions towards this aim. This subnet is a key part of Bittensor’s decentralized AI service ecosystem, encouraging innovation and participation in the field of AI-driven conversations.</span>
                </div>
                <div className='w-full grid gap-y-8'>
                    <div className="grid grid-flow-row text-t-body grid-cols-2 md:grid-cols-4 gap-5">
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Emissions</span>
                            <span className="text-xl font-medium">5.394 %</span>
                        </div>
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Reg cost</span>
                            <span className="text-xl font-medium">0.562 τ</span>
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
                                <span className="text-xl overflow-x-hidden font-medium">5Hpd1smgd8tjQYqZ7tuXBxiC85LYivtKwpYAmoXvpJiJghfu</span>
                            </a>
                        </div>
                    </div>
                    <div className='mt-[30px] '>
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="h2 mb-4">Text Prompting Powered by ComTensor</h1>
                        </div>
                        <div className='mt-[20px] border-[2px] border-[#5D5DFF] rounded-[20px] sm:px-[10px] py-[60px] relative bg-[#1f2330] max-w-[860px] mx-auto'>
                            <div ref={conversationScroll} className='h-[480px] mb-[30px] overflow-y-scroll light-scroll-bar'>
                                <div className='mx-[10px] sm:mx-[30px]'>
                                    {
                                        conversation.map((item, idx) => (
                                            item.role == "user" ?
                                                <div key={idx} className="flex justify-end items-start mb-4 ">
                                                    <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white break-all" >
                                                        {item.content}
                                                    </div>
                                                    {/* <Image src={meImage} width={50} height={50} alt='me' /> */}
                                                    <Image src={userImage} className='rounded-full' width={50} height={50} alt='user' />

                                                </div>
                                                :
                                                <div key={idx} className="flex justify-start items-start mb-4">
                                                    <Image src={comImage} className='rounded-full' width={50} height={50} alt='commune' />
                                                    <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white break-all" >
                                                        {item.content}
                                                    </div>
                                                </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 flex justify-center w-full px-[20px]">
                                <div className='w-full sm:w-[540px] md:w-[640px] mx-auto relative'>
                                    <input 
                                        ref={inputRef} 
                                        value={inputVal} 
                                        onChange={(e) => setInputValue(e.target.value)} 
                                        disabled={loading}
                                        className="w-full bg-gray-500 py-5 px-3 rounded-xl outline-none hover:bg-[#303846] focus:bg-[#303846] focus:border-primary duration-300 transition-all "
                                        type="text" placeholder="Type here ..."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Prompting;