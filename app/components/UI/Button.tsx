import React from "react";
import Image from "next/image";

type ButtonProps = {
    outline?: boolean;
    buttonText: string;
    showArrow?: boolean;
};

const Button: React.FC<ButtonProps> = ({ outline, buttonText, showArrow }) => {
    const buttonStyle = outline ? "btn-outline rounded-sm text-sm rounded-none btn border-primary text-primary min-h-0 h-auto py-3 px-8 hover:border-transparent hover:bg-primary hover:text-whiteColor font-medium" : "";

    return (
        <button className={`btn ${buttonStyle}`}>
            {buttonText}
            {showArrow && <Image src="/icons/arrow-icon.svg" alt="Arrow Right" width={20} height={20} />}
        </button>
    );
};

export default Button;
