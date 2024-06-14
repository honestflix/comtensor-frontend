import PreTraining from "@/components/subnets/pretraining";


export const metadata = {
    title: 'Subnet 7 PreTraining',
    description: 'Facilitates pre-training of AI models on large-scale generic datasets before fine-tuning in specific tasks.',
}


const PreTrainingPage = () => {
    
    return (
        <main className="relative mt-[30px] my-auto mx-auto xl:w-[1400px] px-[20px] py-[50px]">
            <PreTraining />
        </main>
    )
}

export default PreTrainingPage;