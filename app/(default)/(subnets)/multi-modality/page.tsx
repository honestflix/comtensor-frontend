import MultiModality from "@/components/subnets/multi-modality";


export const metadata = {
    title: 'Subnet Multi-modality',
    description: 'Subnet 4 is a leading distributed next-generation search engine that leverages machine learning to capture meaning in unstructured data, including text and images.',
}


const MultiModalityPage = () => {
    
    return (
        <main className="relative mt-[30px] my-auto mx-auto xl:w-[1400px] px-[20px] py-[50px]">
            <MultiModality/>
        </main>
    )
}


export default MultiModalityPage;