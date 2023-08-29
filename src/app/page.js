import React from 'react';
import Info from "@/app/info";
import Detail from "@/app/detail";

const Home = () => {
    return (
        <div className="flex">
            <div className="w-1/5">
                <Info/>
            </div>
            <div className="w-4/5">
                <Detail/>
            </div>
        </div>
    );
};

export default Home;