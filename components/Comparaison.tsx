import { cn } from '@/lib/utils';
import React from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import { IoIosCloseCircle } from 'react-icons/io';
import { useTranslations } from "next-intl";
import Image from 'next/image';
import { IconType } from 'react-icons';


const ROW_HEIGHT = "py-5 md:py-6"; // adapte selon ton design

type ComparisonRow = {
  title: string;
  mosqiblock: IconType | string;
  others: IconType | string;
};

const Comparaison = () => {
    const t = useTranslations("fe.comparison");
    const rows = t.raw("rows") as ComparisonRow[];
    
   const comparisonData = [
    // Les 5 premières lignes sont des icônes
    ...rows.slice(0, 5).map(row => ({
        title: row.title,
        mosqiblock: FaCircleCheck,
        others: IoIosCloseCircle
    })),
    // La 6e ligne est du texte
    {
        title: rows[5].title,
        mosqiblock: rows[5].mosqiblock,
        others: rows[5].others
    }
    ];


    return (
        <section className="bg-secondary px-6 w-full relative py-10 lg:py-20 text-center">
            <div>
                <h6 className="xl:text-xl">{t("sectionTitle")}</h6>
                <h3 className={cn("text-[23px] xl:text-4xl font-bold pb-6", "lg:pb-10")}>
                    {t("mainTitle")}
                </h3>
            </div>

            <div className="max-w-3xl mx-auto">
                <div className="grid grid-cols-3 rounded-3xl overflow-hidden border border-secondary">
                    {/* Header Row */}
                    <div className="bg-transparent"></div>
                    <div className="bg-tertiary rounded-tl-3xl rounded-tr-3xl flex justify-center items-center py-4">
                        <Image src="/images/Pack1.png" alt="MosqiBlock" width={60} height={60} />
                    </div>
                    <div className="bg-transparent flex justify-center items-center py-4">
                        <Image src="/images/Other.png" alt="Others" width={40} height={60} />
                    </div>
                    {/* Data Rows */}
                    {comparisonData.map((data, i) => (
                        <React.Fragment key={i}>
                            {/* Label */}
                            <div className={cn("border-t border-tertiary flex items-center sm:pl-4 text-left", ROW_HEIGHT)}>
                                <span className={cn("text-sm font-medium text-[#333]", "xl:text-base")}>{data.title}</span>
                            </div>
                            {/* MosqiBlock */}
                            <div className={cn("bg-tertiary border-t border-white flex items-center justify-center", comparisonData.length - 1 === i && "rounded-bl-3xl rounded-br-3xl", ROW_HEIGHT)}>
                                {typeof data.mosqiblock === 'string' ? (
                                    <span className={cn("text-[10px] px-2 xl:px-4 text-white", "xl:text-xs")}>{data.mosqiblock}</span>
                                ) : (
                                    React.createElement(data.mosqiblock, { size: 22, className: 'text-white' })
                                )}
                            </div>
                            {/* Others */}
                            <div className={cn("border-t border-tertiary flex items-center justify-center", ROW_HEIGHT)}>
                                {typeof data.others === 'string' ? (
                                    <span className={cn("text-[10px] px-2 xl:px-4", "xl:text-xs")}>{data.others}</span>
                                ) : (
                                    React.createElement(data.others, { size: 22, className: 'text-tertiary' })
                                )}
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Comparaison;
