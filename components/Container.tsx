import React from "react";

interface ContainerProps {
    children?: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="mx-auto w-full h-full max-w-7xl px-4 2xl:px-0">
            {children}
        </div>
    );
};

export default Container;
