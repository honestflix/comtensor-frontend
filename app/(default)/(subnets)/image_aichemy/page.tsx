import ImageAlchemy from "@/components/subnets/image_aichemy";

export const metadata = {
    title: 'Subnet 26 Image Alchemy',
    description: 'Bittensor Subnet 26 aims to revolutionize image processing and creation through decentralized AI technology. We focus on creating high-quality, innovative visual content using advanced machine learning models leveraging the Bittensor network. This approach enables a collaborative and transparent ecosystem for artists and developers, improving the creativity and accessibility of digital images. Image Alchemy represents an important step forward in combining AI and artistic expression to push the boundaries of what is possible in digital art and image compositing.',
}


const Alchemy = () => {
    return (
        <main className="relative mt-[30px] my-auto mx-auto xl:w-[1400px] px-[20px] py-[50px]">
            <ImageAlchemy />
        </main>
    )
}


export default Alchemy;