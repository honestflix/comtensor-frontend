import SturdyPage from "@/components/subnets/sturdy";


export const metadata = {
    title: 'Subnet 10 Sturdy',
    description: 'Sturdy Subnet is a Bittensor subnetwork that enables the creation of decentralized, autonomous yield optimizers.',
}


const SnOracle = () => {
    
    return (
        <main className="relative mt-[30px] my-auto mx-auto xl:w-[1400px] px-[20px] py-[50px]">
            <SturdyPage/>
        </main>
    )
}


export default SnOracle;