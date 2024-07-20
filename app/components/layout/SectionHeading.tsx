import React from "react";

interface SectionHeadingProps {
    title: string;
    description: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, description }) => {
    return (
        <div className="container mx-auto text-primary text-center my-16 font-roboto">
            <h2>{title}</h2>
            <p className="normal-case">{description}</p>
        </div>
    );
};

export default SectionHeading;