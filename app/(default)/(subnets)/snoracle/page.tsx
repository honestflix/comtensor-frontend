import SnOraclePre from "@/components/subnets/snoracle";


export const metadata = {
    title: 'Subnet 28 S&P 500 Oracle',
    description: 'Foundry launched the Foundry S&P 500 Oracle to encourage miners to make frequent S&P 500 price predictions throughout trading hours. The validator sends the miner a timestamp (future time) that the miner needs to predict the S&P 500 price. Miners must respond to S&P 500 price predictions at a specific point in time. The validator stores the miners predictions and then calculates the miners score after the predictions mature. Miners are ranked against each other, naturally encouraging competition among miners.',
}


const SnOracle = () => {
    
    return (
        <main className="relative mt-[30px] my-auto mx-auto xl:w-[1400px] px-[20px] py-[50px]">
            <SnOraclePre/>
        </main>
    )
}


export default SnOracle;