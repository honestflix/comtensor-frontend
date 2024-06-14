import OmronPage from "@/components/subnets/omron";


export const metadata = {
    title: 'Subnet Omron',
    description: 'Omron is set to revolutionize the Bittensor network by establishing the worlds largest Verified Intelligence network through a Proof-of-Inference system. This innovation leverages zk-ML to convert AI models into a unique zk-circuit or fingerprint, an approximation of the models computational graph.Each inference is run through the circuit to produce a zk proof, which in combination with the model input and output forms an end to end Proof of Inference.Think of it like https or SSL for AI models. You wouldnt log into your online banking, healthcare, or investment accounts without secure end to end communications with a server. We shouldnt utilize decentralized AI without Proof-of-Inference for high value actions, or mission critical applications.',
}


const Omron = () => {
    
    return (
        <main className="relative mt-[30px] my-auto mx-auto xl:w-[1400px] px-[20px] py-[50px] ">
            <OmronPage/>
        </main>
    )
}


export default Omron;