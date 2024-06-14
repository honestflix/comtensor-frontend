import Vortex from "@/components/subnets/subvortex";


export const metadata = {
    title: 'Subnet 7 Subvortex',
    description: 'SubVortex introduces a network of incentivized, decentralized Subtensor nodes that are integral to the Bittensor ecosystem, aiming to improve the overall functionality and governance of the network by promoting decentralization, stability, and efficient resource deployment.',
}


const Subvortex = () => {
    
    return (
        <main className="relative mt-[30px] my-auto mx-auto xl:w-[1400px] px-[20px] py-[50px]">
            <Vortex/>
        </main>
    )
}


export default Subvortex;