import NicheImagePage from "@/components/subnets/niche_image";

export const metadata = {
    title: 'Subnet 23 NicheImage',
    description: 'The goal of the NicheImage subnet is to have the best image creation models for a variety of use cases and to provide efficient and affordable inference for businesses looking for image creation services.',
}

const Niche = () => {
    return (
        <main className="relative mt-[30px] my-auto mx-auto xl:w-[1400px] px-[20px] py-[50px]">
            <NicheImagePage />
        </main>
    )
}


export default Niche;