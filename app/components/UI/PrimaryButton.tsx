import React from "react";
import Image from "next/image";

type ButtonProps = {
    primary?: boolean;
    buttonText: string;
    showArrow?: boolean;
    shadow?: boolean;
};

const PrimaryButton: React.FC<ButtonProps> = ({ primary, buttonText, showArrow }) => {
    const buttonStyle = primary ? "btn-primary rounded-sm uppercase text-sm rounded-none btn border-primary text-white min-h-0 h-auto py-3 px-10 hover:border-transparent bg-primary hover:text-whiteColor font-medium" : "";

    return (
        <button className={`btn ${buttonStyle}`}>
            {buttonText}
            {showArrow && <Image src="/icons/arrow-icon.svg" alt="Arrow Right" width={20} height={20} />}
        </button>
    );
};

export default PrimaryButton;
