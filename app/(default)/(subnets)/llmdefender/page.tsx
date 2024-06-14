import LlmDefend from "@/components/subnets/llmdefender";

export const metadata = {
    title: 'Subnet 14 LLM Defender',
    description: 'Bittensor Subnet 14 is designed to enhance security for large-scale language models (LLMs) by implementing a defense-in-depth approach with multiple defense methods and engines. These engines, consisting of single or multiple analyzers, work together to detect attacks against LLMs, providing modular, high-performance detection capabilities. They assign confidence scores to inputs to indicate the likelihood of an attack on the LLM and combine intelligence gathered from hundreds of endpoints to effectively protect applications. The goal of this solution is to empower LLM developers to integrate distributed intelligence with local defenses to provide robust protection against evolving threats. This comprehensive approach provides unprecedented security potential for LLM applications within the Bittensor ecosystem.',
}


const LlmDefernderPage = () => {
    return (
        <main className="relative mt-[30px] my-auto mx-auto xl:w-[1400px] px-[20px] py-[50px]">
            <LlmDefend />
        </main>
    )
}


export default LlmDefernderPage;