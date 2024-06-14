import WomboAI from "@/components/subnets/wombo";

export const metadata = {
    title: 'Subnet 30 Wombo',
    description: 'WOMBO, a pioneer in AI-based creativity, has made a huge impact with over 100 million downloads and over 1 billion creations. We are pioneering the advancement of human creativity through innovative tools like WOMBO Dream and WOMBOT, which allow users to create works of art and memes with simple input. WOMBO, backed by renowned investors, embodies the fusion of technology and artistry and aims to be the happiest corner of the Internet. WOMBO is changing the way we imagine and create content through our commitment to unlocking the creative genius in everyone.',
}

const Wombo = () => {
    return (
        <main className="relative mt-[30px] my-auto mx-auto xl:w-[1400px] px-[20px] py-[50px]">
            <WomboAI />
        </main>
    )
}


export default Wombo;