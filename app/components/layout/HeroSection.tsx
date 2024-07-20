import React from "react";
import Image from "next/image";
import PrimaryButton from "../UI/PrimaryButton";
interface HeroComponentProps {
    title: string;
    subtitle?: string;
    image?: string;
}

const HeroComponent: React.FC<HeroComponentProps> = ({ title, subtitle, image }) => {
    return (
        <div className="container bg-backgroundAccent min-h-screen mx-auto mt-16">
            <div className="flex justify-between items-center gap-8 flex-col-reverse md:flex-row p-4">
                <div className="max-w-screen-sm sm:pr-9">
                    <h1 >{title}</h1>
                    <p className="py-8 text-textColor normal-case max-w-screen-sm">
                        {subtitle}
                    </p>
                    <PrimaryButton buttonText="Explore Now" primary />
                </div>
                <Image src="/images/hero-lady-image.png" alt="Hero Image" width={570} height={720} />
            </div>
        </div>
    );
};

export default HeroComponent;