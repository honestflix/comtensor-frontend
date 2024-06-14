import Cortexx from "@/components/subnets/cortex";

export const metadata = {
    title: 'Subnet Cortex',
    description: 'Cortex.t, is a leading AI development and synthetic data generation platform designed to support app developers and AI innovators with high-quality text and image responses through a decentralized network. It aims to create a fair and transparent environment for the incentivized production of intelligence and the fulfillment of diverse user prompts. Cortex.t uses advanced AI models to generate synthetic prompt-response pairs, facilitating the development of smaller, efficient AI models that retain the capabilities of their larger counterparts. This approach addresses the challenges of data collection and curation, enabling the rapid development of robust and adaptable AI models. By offering tools like SynthPairPro, Cortex.t democratizes access to high-end AI technology, encouraging innovation and customization in the AI field.',
}

const Cortex = () => {

    return (
        <main className="relative mt-[30px] my-auto mx-auto xl:w-[1400px] px-[20px] py-[50px]">
            <Cortexx />
        </main>
    )
}

export default Cortex;