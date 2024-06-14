import BitAgent from "@/components/subnets/bitagent";

export const metadata = {
    title: 'Subnet 20 BitAgent',
    description: 'Bittensor Subnet 20, known as BitAgent, focuses on two key areas: Q&A/Actions and Integration Orchestration. Q&A/Tasking includes real-time data analysis, summarization, logic-based reasoning, and tool execution. Integrated orchestration includes natural language-based task completion in applications such as browser plug-ins for simplified web interactions and data filtering. Future vision includes consolidating other subnets for advanced features. Key features of the development include a Discord bot, web and form filler applications, browser plugins, and a miner that provides feedback and requires a low barrier to entry. This subnet aims to provide cutting-edge features with a focus on accessibility and real-world applications.',
}

const Cortex = () => {

    return (
        <main className="relative mt-[30px] my-auto mx-auto xl:w-[1400px] px-[20px] py-[50px]">
            <BitAgent />
        </main>
    )
}

export default Cortex;