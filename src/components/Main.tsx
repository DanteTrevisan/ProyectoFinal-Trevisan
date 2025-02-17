import React, { ReactNode } from "react";

interface MainProps {
    children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
    return(
        <main className="flex flex-col justify-center items-center flex-grow bg-sjy-100 w-4/5 mt-12">
            {children}
        </main>
    );
};

export default Main;