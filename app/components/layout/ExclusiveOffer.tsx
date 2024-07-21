import React from "react";
import Image from "next/image";
import PrimaryButton from "../UI/PrimaryButton";
import OfferCard from "../UI/OfferCard";

interface ExclusiveOfferProps {
    title: string;
    subtitle: string;
}

// Offer ends soon component
const ExclusiveOffer: React.FC<ExclusiveOfferProps> = ({ title, subtitle }) => {
    return (
        <div className="container mx-auto py-8">
            <div className="md:flex gap-4 w-full bg-backgroundAccent">
            <Image className="px-8" src="/images/special-offer.png" alt="Hero Image" width={482} height={596} />
                <div className="flex flex-col items-start gap-4 p-6 place-content-center">
                    <h2 className="text-4xl font-bold">{title}</h2>
                    <p className="normal-case text-primary max-w-[450px]">{subtitle}</p>
                    <div className="flex gap-8 mb-4">
                        <OfferCard number={6} text="Days" />
                        <OfferCard number={18} text="Hours" />
                        <OfferCard number={48} text="Min" />
                    </div>
                    <PrimaryButton buttonText="Buy Now" primary />
                </div>
            </div>
        </div>
    );
}

export default ExclusiveOffer;

