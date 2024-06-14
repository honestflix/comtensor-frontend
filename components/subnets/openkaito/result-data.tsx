
import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';

type ResultItemType = {
    content: string
}

const containerVariants:Variants = {
    open: {
        clipPath: "inset(0% 0% 0% 0% round 10px)",
        transition: {
          type: "spring",
          bounce: 0,
          duration: 0.5,
          delayChildren: 0.3,
          staggerChildren: 0.1
        }
      },
      closed: {
        clipPath: "inset(10% 50% 90% 50% round 10px)",
        transition: {
          type: "spring",
          bounce: 0,
          duration: 0.3,
          when: "afterChildren",
          staggerDirection: -1,
          staggerChildren: 0.06
        }
      }
}

const itemVariants: Variants = {
    open: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: {
      opacity: 0,
      scale: 0.3,
      filter: "blur(20px)",
      transition: { duration: 0.2 }
    }
  };


const ResultData = ({data}: {data: ResultItemType[]}) => {

    const [isOpen, setIsOpen]  = useState<boolean>(false);

    useEffect( () => {
        if(data.length > 0) {
            setIsOpen(true);
        }
    }, [data])
    
    return(
        <motion.div initial={false} animate={isOpen ? "open" : "closed"} className="mt-[30px]">
            <motion.ul variants={containerVariants} className="mt-[10px] list-none space-y-3">
                {
                    data.map((item, idx) => (
                        <motion.li key={idx} variants={itemVariants} className="border-[1px] rounded-lg px-[15px] sm:px-[30px] py-[10px] sm:py-[20px]">
                            <p className="line-clamp-3 h-[75px]">
                                {item.content}
                            </p>
                        </motion.li>
                    ))
                }
            </motion.ul>
        </motion.div>
        
    )
}


export default ResultData;