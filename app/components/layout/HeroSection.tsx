import React from "react";
import Image from "next/image";
import PrimaryButton from "../UI/PrimaryButton";
interface HeroComponentProps {
    title: string;
    subtitle?: string;
    image?: string;
}

// Home page hero section
const HeroComponent: React.FC<HeroComponentProps> = ({ title, subtitle, image }) => {
    return (
        <div className="container bg-backgroundAccent mx-auto p-6 md:py-24 md:px-0">
            <div className="flex justify-between items-center gap-8 flex-col-reverse md:flex-row">
                <div className="max-w-screen-sm sm:pr-9">
                    <h1 className="md:line-height-[107px]">{title}</h1>
                    <p className="py-8 text-textColor normal-case md:max-w-[350px] tracking-wider">
                        {subtitle}
                    </p>
                    <PrimaryButton buttonText="Explore Now" primary />
                </div>
                <div className="add-dots-top add-dots-bottom">
                    <Image src="/images/hero-lady-image.png" alt="Hero Image" width={570} height={720} />
                </div>
            </div>
        </div>
    );
};

export default HeroComponent;