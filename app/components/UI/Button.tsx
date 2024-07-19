import React from "react";
import Image from "next/image";

type ButtonProps = {
    outline?: boolean;
    buttonText: string;
    showArrow?: boolean;
};

const Button: React.FC<ButtonProps> = ({ outline, buttonText, showArrow }) => {
    const buttonStyle = outline ? "btn-outline uppercase text-sm rounded-none btn border-primary text-primary min-h-0 h-auto py-2 px-6 hover:border-transparent hover:bg-primary hover:text-whiteColor" : "";

    return (
        <button className={`btn ${buttonStyle}`}>
            {buttonText}
            {showArrow && <Image src="/icons/arrow-icon.svg" alt="Arrow Right" width={20} height={20} />}
        </button>
    );
};

export default Button;
