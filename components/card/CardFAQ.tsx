import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import React, { FC } from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

interface CardFAQProps {
    title: string;
    content: string;
    isOpen: boolean[];
    setIsOpen: React.Dispatch<React.SetStateAction<boolean[]>>;
    index: number;
}

const CardFAQ: FC<CardFAQProps> = ({
  title,
  content,
  isOpen,
  setIsOpen,
  index
}) => {
  const handleFaqClick = (index: number) => {
    const newFaqStates = [...isOpen];
    newFaqStates[index] = !newFaqStates[index];
    setIsOpen(newFaqStates);
  };
      
  return (
    <div className='flex gap-4 items-start w-full'>
      <div onClick={() => handleFaqClick(index)} className={cn("cursor-pointer w-full shadow-sm rounded-lg flex flex-col text-left justify-start items-start gap-2 px-4 py-3 bg-white border border-secondary", "lg:py-4 lg:px-10")}>
        <div className={cn("w-full flex justify-between items-center gap-6", "lg:gap-4")}>
          <h3 className={cn("text-left text-[13px] font-medium lg:text-base")}>{title}</h3>
          <IoIosArrowDropdownCircle className={cn("text-2xl rounded-full min-w-min border-2 border-tertiary fill-tertiary duration-300", isOpen[index] ? "rotate-180" : "rotate-0")} />
        </div>
        <AnimatePresence>
          {isOpen[index] && (
            <>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className={cn("space-y-6 py-4 overflow-hidden")}>
                  <div className={cn("text-[13px] lg:text-base")}>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {content}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CardFAQ;