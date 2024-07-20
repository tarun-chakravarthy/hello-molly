import React from "react";
import Image from "next/image";

type ButtonProps = {
    primary?: boolean;
    buttonText: string;
    showArrow?: boolean;
};

const PrimaryButton: React.FC<ButtonProps> = ({ primary, buttonText, showArrow }) => {
    const buttonStyle = primary ? "btn-primary rounded-sm drop-shadow-2xl uppercase text-sm rounded-none btn border-primary text-white min-h-0 h-auto py-4 px-8 hover:border-transparent bg-primary hover:text-whiteColor" : "";

    return (
        <button className={`btn ${buttonStyle}`}>
            {buttonText}
            {showArrow && <Image src="/icons/arrow-icon.svg" alt="Arrow Right" width={20} height={20} />}
        </button>
    );
};

export default PrimaryButton;
