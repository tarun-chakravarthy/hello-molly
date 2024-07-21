import React from "react";

type OfferCardProps = {
    number: number;
    text: string;
};

// Special offer timer block
const OfferCard: React.FC<OfferCardProps> = ({ number, text }) => {
    return (
        <div className="bg-white place-content-center p-2 rounded-sm w-[100px] h-[100px] text-center text-primary">
            <h2 className="text-[32px] custom-line-height font-bold font-sans">{number}</h2>
            <p className="text-sm mt-0 normal-case">{text}</p>
        </div>
    );
};

export default OfferCard;