import DaturaPage from "@/components/subnets/datura";

export const metadata = {
    title: 'Subnet Datura',
    description: 'Bittensor Smart-Scrape on Subnet 22 is an advanced AI-powered tool designed for efficient Twitter data analysis. It offers real-time access to Twitters database, sentiment and metadata analysis, enhancing understanding of public sentiment and user interactions. Positioned on the decentralized Bittensor network, it promises reliability, customizability, and is suitable for a wide range of research applications. This user-friendly platform streamlines data analysis, saving time and aiding in informed decision-making across various fields.',
}

const Datura = () => {

    return (
        <main className="relative mt-[30px] my-auto mx-auto xl:w-[1400px] px-[20px] py-[50px]">
            <DaturaPage />
        </main>
    )
}

export default Datura;