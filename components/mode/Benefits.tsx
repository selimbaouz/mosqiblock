import { benefitsFeelingData } from '@/data';
import { cn } from '@/lib/utils';
import React from 'react';
import TrustFeatures from '../TrustFeatures';

const Benefits = () => {
    return (
        <>
            <p className={cn("text-sm lg:text-lg max-w-4xl mx-auto text-white")}>Chez Wemom, nous utilisons uniquement des matériaux de haute qualité, sélectionnés pour la sécurité, le confort et la protection des femmes enceintes pendant tout le trajet.</p>
            <div className={cn("py-4 text-background flex flex-col gap-2 items-center justify-center font-medium max-w-screen-xl mx-auto", "grid grid-cols-2", "lg:grid-cols-4")}>
                {benefitsFeelingData.map((data, index) => (
                    <TrustFeatures
                    key={index}
                    icon={data.icon}
                    title={data.title}
                    />
                ))}
            </div>
        </>
    );
};

export default Benefits;