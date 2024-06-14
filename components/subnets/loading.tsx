import Image from 'next/image';
import comLogo from '../../public/images/com-logo.png';

const Loading = () => {
    return (
        <div className="absolute top-0 flex justify-center items-center  w-full h-screen">
            <div className="">
                <Image src={comLogo} className="z-[100] relative w-[100px] h-[100px] animate-bounce duration-500 transition-all" width={300} height={300} alt="logo" />
            </div>
        </div>
    )
}


export default Loading;