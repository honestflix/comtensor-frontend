import Vision1 from "@/components/subnets/vision"

export const metadata = {
    title: 'Subnet Vision',
    description: 'Subnet 19 is the Bittensor subnetwork, initially focusing on image creation and manipulation models and inference at scale.',
}


const Vision = () => {
    
    return (
        <main className="mt-[30px] my-auto mx-auto xl:w-[1400px] px-[20px] py-[50px]">
            <Vision1 />
        </main>
    )
}

export default Vision;