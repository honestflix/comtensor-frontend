import FractalPage from "@/components/subnets/fractal";


export const metadata = {
    title: 'Subnet 29 Fractal',
    description: 'Fractal is Text-to-Video Generation Grid leverages deterministic verification in a decentralized node grid to optimize text-to-video inference with minimal latency, featuring a unique gamification-resistant mechanism to ensure integrity and efficiency.',
}


const Fractal = () => {
    
    return (
        <main className="relative mt-[30px] my-auto mx-auto xl:w-[1400px] px-[20px] py-[50px]">
            <FractalPage/>
        </main>
    )
}


export default Fractal;