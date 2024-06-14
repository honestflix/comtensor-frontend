"use client"

const FractalPage: React.FC = () => {
    
    return (
        <div className="mt-12 items-center justify-center">
            <div className="flex items-center justify-center mt-12 p-4 rounded-sm text-white w-full bg-transparent rounded-md text-2xl">
                <header className="mt-24 flex flex-col items-center justify-center gap-4 md:flex-row md:items-stretch lg:gap-x-8">
                    <div className="relative shrink-0 w-32 h-32 aspect-square rounded-[2rem] overflow-hidden md:w-36 md:h-36">
                        <img src="images/subnets/Subnet_Mark/subnet-29.webp" style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, color: 'transparent', visibility: 'visible' }} />
                    </div>
                    <div className="relative text-center gap-2 justify-between pt-11 lg:pt-0 lg:justify-start flex flex-col w-full md:d3">
                        <div className="flex flex-col md:flex-row items-center md:items-end space-y-2 md:space-y-0">
                            <h1 className="text-t-textLight text-2xl md:text-5xl lg:text-8xl font-bold">Fractal Research</h1>
                        </div>
                        <p className="text-t-primary font-light lg:text-base">Fractal accelerates text-to-video generation with a secure, decentralized approach.</p>
                    </div>
                </header>
            </div>
            <div className='flex flex-col mt-12 gap-y-12 lg:gap-y-24 gap-x-24 items-start justify-center'>
                <div className="relative inline-block">
                    <a href="https://fractalnet.io/playground" className="inline-block px-4 py-2 rounded-lg bg-green-400 text-white border border-gray-700 shadow">
                        Launch App
                    </a>
                    <span className="animate-ping absolute top-0 right-0 -mt-2 -mr-2 h-6 w-6 bg-blue-900 rounded-full border-2 border-red-200"></span>
                    <span className="absolute top-0 right-0 -mt-2 -mr-2 h-6 w-6 bg-red-400 rounded-full"></span>
                </div>
                <div className='w-full grid gap-y-8 rounded border border-t-bg03 bg-t-bg02 p-4 px-6'>
                    <span className="font-semibold text-3xl text-t-textLight">What is Subnet 29 about?</span>
                    <span className="font-semibold text-xl text-t-textLight">Fractal's Text-to-Video Generation Grid leverages deterministic verification in a decentralized node grid to optimize text-to-video inference with minimal latency, featuring a unique gamification-resistant mechanism to ensure integrity and efficiency.</span>
                    <span className="font-semibold text-3l text-t-textLight">Fractal, taking inspiration from Manifold Labs' Deterministic Verification Network, is utilizing deterministic verification to create a grid of decentralized nodes to perform inference for video generation. By incentivizing users to host text-to-video models, this subnet allows Fractal to develop a mechanism that optimizes how end-user inference requests are handled to minimize latency. Additionally, the subnet is incredibly gamification-resistant, as a random seed is generated for each inference request, and if the Verifier and Prover seeds do not match, the Prover will be penalized.</span>
                </div>
                <div className='w-full grid gap-y-8'>
                    <div className="grid grid-flow-row text-t-body grid-cols-2 md:grid-cols-4 gap-5">
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Emissions</span>
                            <span className="text-xl font-medium">0.957 %</span>
                        </div>
                        <div className="flex gap-5 flex-col justify-between rounded border border-t-bg03 bg-t-bg02 p-4 px-6">
                            <span className="text-sm text-t-textLight uppercase">Reg cost</span>
                            <span className="text-xl font-medium">0.513 τ</span>
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
                                <span className="text-xl overflow-x-hidden font-medium">5CSTe9Wr1x35NuzWQ3eZfk533kpnzCrYaywaMnibEo2ZsS7J</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FractalPage;
