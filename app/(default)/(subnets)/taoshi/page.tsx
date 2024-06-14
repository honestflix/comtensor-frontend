import Taoshi from "@/components/subnets/taoshi";


export const metadata = {
    title: 'Subnet 7 Taoshi',
    description: 'Taoshi is at the forefront of the Bittensor revolution, utilizing decentralized AI and machine learning to provide advanced trading signals across various asset classes. Their mission focuses on democratizing access to sophisticated quantitative tools, aiming to make financial markets accessible to a wider audience including AI enthusiasts and entrepreneurs. As a key player in the blockchain space, Taoshi fosters innovation and informed decision-making within its user-friendly platform.',
}


const TaoshiPage = () => {
    
    return (
        <main className="relative mt-[30px] my-auto mx-auto xl:w-[1400px] px-[20px] py-[50px]">
            <Taoshi />
        </main>
    )
}

export default TaoshiPage;