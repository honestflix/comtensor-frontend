import ItsAi from "@/components/subnets/Its-AI";


export const metadata = {
    title: 'Subnet Its-AI',
    description: 'Our subnet focuses on AI-generated content detection. Given the rapid growth of LLM-generated text, such as ChatGPT, which outputs 100 billion words per day compared to 100 trillion words for humans, we believe that the ability to accurately identify AI-generated text will become increasingly necessary.',
}


const MultiModalityPage = () => {
    
    return (
        <main className="relative mt-[30px] my-auto mx-auto xl:w-[1400px] px-[20px] py-[50px]">
            <ItsAi/>
        </main>
    )
}


export default MultiModalityPage;