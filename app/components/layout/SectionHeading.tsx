import React from "react";

interface SectionHeadingProps {
    title: string;
    description: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, description }) => {
    return (
        <div className="container mx-auto text-primary text-center p-4 md:pt-16 md:pb-12">
            <h2>{title}</h2>
            <p className="normal-case mt-2">{description}</p>
        </div>
    );
};

export default SectionHeading;