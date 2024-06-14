"use client"
import { useRef, useState, useEffect } from "react";

const MyShellSubnet = () => {
    const inputRef = useRef<HTMLInputElement|null>(null);
    const [inputVal, setInputValue] = useState<string>('');
    const [conversation, setConversation] = useState<string[]>([]);
    const conversationScroll = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        function handleKeyPress(event: KeyboardEvent) {
            if (event.key === 'Enter') {
                sendMessage();
            }
         }
         
         const inputElement = inputRef.current!;
   
         if(inputElement) {
            inputElement.addEventListener('keypress', handleKeyPress);
   
            return () => {
               inputElement.removeEventListener('keypress', handleKeyPress);
            };
         }

    }, [inputVal]);

    useEffect(() => {

        if(conversationScroll.current) {
            const targetScrollTop = conversationScroll.current.scrollHeight - conversationScroll.current.clientHeight;
            conversationScroll.current.scrollTop = targetScrollTop;
        }

    }, [conversation]);


    const onSendQueryHandle = async() => {

        setConversation(prev =>  [...prev, inputVal]);

        setLoading(true);

        setLoading(false);
    }
    

    const sendMessage = () => {
        if(inputVal == '') {
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
                        <img src="images/subnets/Subnet_Mark/subnet-3.webp" style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent', visibility: 'visible' }} />
                    </div>
                    <div className="relative text-center gap-2 justify-between pt-11 lg:pt-0 lg:justify-start flex flex-col w-full md:text-left">
                        <div className="flex flex-col md:flex-row items-center md:items-end space-y-2 md:space-y-0">
                            <h1 className="text-t-textLight text-2xl md:text-5xl lg:text-8xl font-bold">MyShell</h1>
                        </div>
                        <p className="text-t-primary font-light lg:text-base">MyShell is developing innovative, open-source Text-to-Speech (TTS) technology.</p>
                    </div>
                </header>
            </div>
            <div className='flex flex-col mt-12 gap-y-12 lg:gap-y-24 gap-x-24 items-start justify-center'>
                <div className="relative inline-block">
                    <a href="https://myshell.ai/" className="inline-block px-4 py-2 rounded-lg bg-green-400 text-white border border-gray-700 shadow">
                        Launch App
                    </a>
                    <span className="animate-ping absolute top-0 right-0 -mt-2 -mr-2 h-6 w-6 bg-blue-900 rounded-full border-2 border-red-200"></span>
                    <span className="absolute top-0 right-0 -mt-2 -mr-2 h-6 w-6 bg-red-400 rounded-full"></span>
                </div>
                <div className='w-full grid gap-y-8'>
                    <span className="font-semibold text-3xl text-t-textLight">What is Subnet 3 about?</span>
                    <span className="font-semibold text-xl text-t-textLight">MyShell specializes in advancing Text-to-Speech (TTS) technology, focusing on developing open-source TTS models. Led by a team with strong academic backgrounds and significant expertise, MyShell contributes to enhancing voice-enabled applications through innovation and collaboration.</span>
                </div>
                <div className='w-full grid gap-y-8'>
                    <div className="grid grid-flow-row text-t-body grid-cols-2 md:grid-cols-4 gap-5">
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Emissions</span>
                            <span className="text-xl font-medium">2.395 %</span>
                        </div>
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Reg cost</span>
                            <span className="text-xl font-medium">0.106 τ</span>
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
                                <span className="text-xl overflow-x-hidden font-medium">5CykWht3gMs3c9a1jicuPZGvnNiMwJK2akyHE3iZwBbESgCz</span>
                            </a>
                        </div>
                    </div>
                    <iframe
                        src="https://myshell.ai/"
                        width="100%"
                        height="800"
                        className='mt-4 rounded-sm'
                        sandbox="allow-scripts allow-same-origin"
                        loading='lazy'
                    ></iframe>
                </div>
            </div>
        </div>
    )
}


export default MyShellSubnet;